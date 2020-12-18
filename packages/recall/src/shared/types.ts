import {Request, Response} from "express";

export type TEndpoint = Function;

export type TEndpointsTable = {
  [K in string]: TEndpoint | TEndpointsTable;
}

export type TRecallServerOptions<TContext> = {
  context?: (req: Request, res: Response) => Promise<TContext>;
}

export interface IRecallException {
  isNetworkError: boolean;
  isRemoteError: boolean;
  message?: string;
  data?: any;
}

export interface IRecallResponse {
  returnData?: any;
  exception?: IRecallException;
}