import { IRoute } from "@/shared/domain/routes/routes.interface";

export const createRouteMap = (
  routes: IRoute[],
  basePath = ""
): Record<string, string> => {
  const routeMap: Record<string, string> = {};
  routes.forEach((route) => {
    const fullPath = `${basePath}${route.path}`;
    routeMap[route.key] = fullPath;
    if (route.subRoutes) {
      Object.assign(routeMap, createRouteMap(route.subRoutes, `${fullPath}/`));
    }
  });
  return routeMap;
};
