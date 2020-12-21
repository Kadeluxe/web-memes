import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import WorkspaceCreationView from "@frontend/ui/workspaces/views/WorkspaceCreationView.vue";

export enum ROUTES {
  WORKSPACE_CREATION = "WORKSPACE_CREATION",
}

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: WorkspaceCreationView,
    name: ROUTES.WORKSPACE_CREATION,
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});