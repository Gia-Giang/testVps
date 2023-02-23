import { lazy } from "react";

const Blog = lazy(() => import("./index"));

const router = [
  {
    path: "/Blog",
    component: Blog,
  },
];

export default router;
