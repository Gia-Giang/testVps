import { lazy } from "react";

const Home = lazy(() => import("./index"));

const router = [
  {
    path: "/",
    component: Home,
  },
];

export default router;
