import { createRouteMap } from "@/shared/application/components/custom/NavigateByKey/createRouteMap";
import { protectedRoutes } from "./protectedRoutes";
import { publicRoutes } from "./publicRoutes";

export const routeMap: Record<string, string> = {
  ...createRouteMap(publicRoutes),
  ...createRouteMap(protectedRoutes),
};

export type RouteKey = keyof typeof routeMap;
