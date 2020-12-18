import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import CalculatorView from "@frontend/ui/calculator/views/CalculatorView.vue";

export enum ROUTES {
  CALCULATOR = "CALCULATOR",
}

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: CalculatorView,
    name: ROUTES.CALCULATOR,
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});