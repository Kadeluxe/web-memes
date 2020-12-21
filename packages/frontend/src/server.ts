import {FetchAdapter} from "@recall/client/adapters";
import {GetRecallClient} from "@recall/client";
import {IServer} from "@backend/endpoints";

export const server: IServer = GetRecallClient(new FetchAdapter());
