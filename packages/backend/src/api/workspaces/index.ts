import {checkArgs} from "@recall/validation/checkArgs";
import Joi from "joi";
import {RecallContext} from "@backend/types/context";
import {requireAuth} from "@backend/auth";
import {WorkspaceEntity} from "@backend/entities/WorkspaceEntity";

const createWorkspace = {
  before: [
    requireAuth(),
    checkArgs(
      Joi.string().trim().required(),
    ),
  ],
  async handler(this: RecallContext, name: string) {
    let workspace = await this.em.findOne(WorkspaceEntity, {owner: this.user, name});
    if (workspace != null) {
      console.error(`Workspace exists`, workspace);
      return;
    }

    workspace = new WorkspaceEntity();
    workspace.name = name;
    workspace.owner = this.user!;

    await this.em.persistAndFlush(workspace);

    return workspace;
  },
};

const getWorkspaces = {
  before: [
    requireAuth(),
  ],
  async handler(this: RecallContext,) {
    return await this.em.find(WorkspaceEntity, {owner: this.user});
  },
};

export const workspaces = {
  createWorkspace,
  getWorkspaces,
};