import { IRoute } from "@/shared/domain/routes/routes.interface";
import { lazy } from "react";
import { flattenRoutes } from "../utils/falttenRoutes";

const forConstructProtectedRoutes: IRoute[] = [
  {
    key: "app",
    path: "/app",
    authority: [],
    component: lazy(
      () =>
        import("@/features/Dashboard/application/pages/Dashboard")
    ),
  },
];
export const protectedRoutes = flattenRoutes(forConstructProtectedRoutes);
