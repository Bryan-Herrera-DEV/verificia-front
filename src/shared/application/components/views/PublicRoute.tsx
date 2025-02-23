import appConfig from "@/core/config/app.config";
import { Navigate, Outlet } from "react-router-dom";
import { SearchingStore } from "../../stores/searchinStore";

const { authenticatedEntryPath } = appConfig;

const PublicRoute = () => {
  const { initSearch } = SearchingStore();

  return initSearch ? <Navigate to={authenticatedEntryPath} /> : <Outlet />;
};

export default PublicRoute;
