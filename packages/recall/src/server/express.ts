import {NextFunction, Request, Response} from "express";
import {TEndpointsTable, TRecallServerOptions} from "@recall/shared/types";
import {Recall} from "@recall/shared/recall";

export function recall<TContext>(endpoints: TEndpointsTable, options: TRecallServerOptions<TContext>) {
  const recallServer = new Recall(endpoints);

  return async function (req: Request, res: Response, next: NextFunction) {
    if (req.method != "POST") {
      res.status(405);
      return;
    }

    const body = <unknown>req.body;
    if (body == undefined || !Array.isArray(body)) {
      throw new Error(`Wrong body`);
    }

    const [path, args] = body;

    if (typeof path !== "string") {
      throw new Error(`Incorrect path type`);
    }

    if (!Array.isArray(args)) {
      throw new Error(`Incorrect args type`);
    }

    const context = options.context !== undefined ? await options.context(req, res) : <TContext>{};
    const result = await recallServer.callEndpoint(path, args, context);

    res.json(result);
  };
}