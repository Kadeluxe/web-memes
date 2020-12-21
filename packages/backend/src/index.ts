import "../../loader";
import "reflect-metadata";
import {endpoints} from "@backend/endpoints";
import express, {Request, Response} from "express";
import {recall} from "@recall/server";
import {authMiddleware} from "@backend/auth";
import {RecallContext} from "@backend/types";
import {MikroORM} from "@mikro-orm/core";
import {WorkspaceEntity} from "@backend/entities/WorkspaceEntity";
import {TodoEntity} from "@backend/entities/TodoEntity";
import {UserEntity} from "@backend/entities/UserEntity";

(async function main() {
  const orm = await MikroORM.init({
    entities: [
      UserEntity,
      WorkspaceEntity,
      TodoEntity,
    ],

    type: "postgresql",

    dbName: "webmemes",
    host: "kade.dev",
    user: "webmemes",
    password: "webmemes",
  });

  console.log("Connected to database");

  const app = express();
  app.use(express.json());
  app.use((req, res, next) => {
    req.context = {
      user: null,
      em: orm.em.fork(),
    };

    next();
  });
  app.use(authMiddleware);

  app.use("/api", recall<RecallContext>(endpoints, {
    async context(req: Request, res: Response) {
      return {
        req,
        res,
        user: req.context.user,
        em: orm.em.fork(),
      };
    },
  }));

  const PORT = 4000;

  app.listen(PORT);

  console.log(`Listening on :${PORT}`);
})();