import { IRoute } from "@/shared/domain/routes/routes.interface";

export const flattenRoutes = (
  routes: IRoute[],
  parentKey = "",
  parentPath = ""
): IRoute[] =>
  routes.reduce<IRoute[]>((acc, route) => {
    const { subRoutes, key, path, ...restRouteProps } = route;

    const newKey = parentKey ? `${parentKey}_${key}` : key;

    const newPath = parentPath ? `${parentPath}${path}` : path;

    const currentRoute: IRoute = {
      key: newKey,
      path: newPath,
      ...restRouteProps,
    };
    const children = subRoutes ? flattenRoutes(subRoutes, newKey, newPath) : [];
    return [...acc, currentRoute, ...children];
  }, []);
