import {IUser} from "@shared/entities/IUser";

export interface IServer {
  profiles: {
    getMe(): Promise<IUser | null>,
  },
  workspaces: {
    createWorkspace(name: string): Promise<any>,
    getWorkspaces(): Promise<any>
  }
}