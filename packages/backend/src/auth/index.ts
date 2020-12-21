import {NextFunction, Request, Response} from "express";
import {UserEntity} from "@backend/entities/UserEntity";
import {RecallContext} from "@backend/types";
import {IRecallException} from "@recall/shared/types";

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  // FIXME
  req.context.user = await req.context.em.findOne(UserEntity, 1);

  next();
}

export function requireAuth() {
  return function (this: RecallContext, args: any[]) {
    if (this.req.context.user == null) {
      throw <IRecallException>{
        message: `Authorization required`,
        code: 401,
      };
    }
  };
}