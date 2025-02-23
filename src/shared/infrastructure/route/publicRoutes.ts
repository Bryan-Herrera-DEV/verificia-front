import { IRoute } from "@/shared/domain/routes/routes.interface";
import { lazy } from "react";

export const publicRoutes: IRoute[] = [
  {
    key: "home",
    path: "/home",
    component: lazy(
      () => import("@/features/Home/application/pages/LandingPrincipal")
    ),
    authority: [],
  }
];
