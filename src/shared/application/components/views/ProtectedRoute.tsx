import appConfig from "@/core/config/app.config";
import { Navigate, Outlet } from "react-router-dom";
import { SearchingStore } from "../../stores/searchinStore";

const { unAuthenticatedEntryPath } = appConfig;

export const ProtectedRoute = () => {
  const { initSearch } = SearchingStore();
  if (!initSearch) {
    return <Navigate replace to={`${unAuthenticatedEntryPath}`} />;
  }

  return <Outlet />;
};
