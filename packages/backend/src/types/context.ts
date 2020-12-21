import {Request, Response} from "express";
import {EntityManager} from "@mikro-orm/core";
import {UserEntity} from "@backend/entities/UserEntity";

declare global {
  namespace Express {
    interface Request {
      context: {
        em: EntityManager,
        user: UserEntity | null,
      }
    }
  }
}

export interface RecallContext {
  req: Request;
  res: Response;
  user: UserEntity | null;
  em: EntityManager;
}