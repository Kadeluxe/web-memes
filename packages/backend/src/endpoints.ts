import {workspaces} from "@backend/api/workspaces";
import {profiles} from "@backend/api/profiles";
import {TConsumerInterface} from "@recall/shared/endpoints";

export const endpoints = {
  workspaces,
  profiles,
};

// TODO: investigate a way to automatically infer
// interface for caller; probably possible using
// mapped types

// TODO: this can be improved
export type IServer = TConsumerInterface<typeof endpoints>;