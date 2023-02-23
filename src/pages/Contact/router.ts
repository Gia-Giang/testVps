import { lazy } from "react";

const Contact = lazy(() => import("./index"));

const router = [
  {
    path: "/Contact",
    component: Contact,
  },
];

export default router;
