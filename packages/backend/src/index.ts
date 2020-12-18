import "../../loader";
import "reflect-metadata";

import express, {Request, Response} from "express";
import {endpoints} from "@backend/endpoints";
import {recall} from "@recall/server";
import {AppContext} from "@backend/types/AppContext";

(async function main() {
  const app = express();
  app.use(express.json());
  app.use("/api", recall<AppContext>(endpoints, {
    async context(req: Request, res: Response) {
      return {
        req,
        res,
      };
    },
  }));

  app.listen(4000);

  console.log("Listening");
})();