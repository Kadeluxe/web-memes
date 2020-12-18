import {TServer} from "@backend/endpoints";

import {FetchAdapter} from "@recall/client/adapters";
import {GetRecallClient} from "@recall/client";

export const server = <TServer>GetRecallClient(new FetchAdapter());
