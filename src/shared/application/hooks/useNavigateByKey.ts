import { RouteKey, routeMap } from "@/shared/infrastructure/route/mappedRoutes";
import { useNavigate } from "react-router-dom";

const useNavigateByKey = () => {
  const navigate = useNavigate();

  const navigateByKey = (
    routeKey: RouteKey,
    params?: Record<string, string>
  ) => {
    const path = routeMap[routeKey];
    if (!path) {
      console.error(`No se encontró la ruta para la clave: ${routeKey}`);
      return;
    }

    const basePath = path.startsWith("/") ? path : `/${path}`;
    const resolvedPath = params
      ? Object.keys(params).reduce(
          (acc, paramKey) => acc.replace(`:${paramKey}`, params[paramKey]),
          basePath
        )
      : basePath;

    const cleanedPath = resolvedPath.replace(/\/{2,}/g, "/");

    navigate(cleanedPath);
  };

  return navigateByKey;
};

export default useNavigateByKey;
