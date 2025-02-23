import appConfig from "@/core/config/app.config";
import { ProtectedRoute } from "@/shared/application/components/views/ProtectedRoute";
import { IRoute } from "@/shared/domain/routes/routes.interface";
import { protectedRoutes } from "@/shared/infrastructure/route/protectedRoutes";
import { publicRoutes } from "@/shared/infrastructure/route/publicRoutes";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppRoute from "./AppRoute";
import PublicRoute from "./PublicRoute";

const renderRoutes = (routes: IRoute[], basePath = "") => {
  return routes.map((route) => {
    const fullPath =
      basePath + (route.path.startsWith("/") ? route.path : `/${route.path}`);
    return (
      <Route
        key={fullPath}
        path={fullPath}
        element={<AppRoute routeKey={route.key} component={route.component} />}
      >
        {route.subRoutes && renderRoutes(route.subRoutes, fullPath)}
      </Route>
    );
  });
};

const { authenticatedEntryPath } = appConfig;

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route
          path="/"
          element={<Navigate replace to={authenticatedEntryPath} />}
        />
        {renderRoutes(protectedRoutes)}
      </Route>
      <Route path="/" element={<PublicRoute />}>
        {renderRoutes(publicRoutes)}
      </Route>
    </Routes>
  );
};

export const PrincipalViews = () => {
  return (
    <Suspense
      fallback={
        <div className="flex flex-auto flex-col h-[100vh]">Cargando...</div>
      }
    >
      <AllRoutes />
    </Suspense>
  );
};
