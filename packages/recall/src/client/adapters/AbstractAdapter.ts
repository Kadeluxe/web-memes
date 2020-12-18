import {IRecallResponse} from "@recall/shared/types";

export abstract class AbstractAdapter {
  public abstract call(url: string, data: any): Promise<IRecallResponse>;
}