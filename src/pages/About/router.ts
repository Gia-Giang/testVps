import { lazy } from "react";

const About = lazy(() => import("./index"));

const router = [
  {
    path: "/About",
    component: About,
  },
];

export default router;
