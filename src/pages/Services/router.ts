import { lazy } from "react";

const Services = lazy(() => import("./index"));

const router = [
  {
    path: "/Services",
    component: Services,
  },
];

export default router;
