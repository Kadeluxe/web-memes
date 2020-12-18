import {IRecallResponse, TEndpoint, TEndpointsTable} from "@recall/shared/types";

export class Recall<TContext> {
  public constructor(
    protected endpoints: TEndpointsTable,
  ) {

  }

  public async callEndpoint(path: string, args: any[], context: TContext) {
    const endpoint = this.getEndpoint(path);
    if (!endpoint) {
      throw new Error("Endpoint not found"); // TODO
    }

    let result: IRecallResponse;

    try {
      const returnData = await endpoint.apply(context, args);

      result = {
        returnData,
      };
    } catch (e) {
      console.log(e);
      result = {
        exception: {
          message: e.message,
          data: e.data,
          isRemoteError: true,
          isNetworkError: false,
        },
      };
      console.log(result);
    }

    return result;
  }

  public getEndpoint(path: string) {
    if (path.length == 0) return undefined;

    const parts = path.split(".");

    let current: TEndpointsTable | TEndpoint = this.endpoints;
    for (const it of parts) {
      current = (<TEndpointsTable>current)[it];
    }

    if (typeof current == "function") {
      return <TEndpoint>current;
    }

    return undefined;
  }
}