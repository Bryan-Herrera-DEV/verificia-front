import { FC, lazy, Suspense, useMemo } from "react";
import useLocale from "../../hooks/useLocale";
import { SearchingStore } from "../../stores/searchinStore";

const layouts = {
  AppLayout: lazy(() => import("./AuthLayout")),
  LandingLayout: lazy(() => import("./PublicLayout")),
};

export const PrincipalLayout: FC = () => {
  const { initSearch } = SearchingStore();

  useLocale();

  const AppLayout = useMemo(() => {
    return initSearch ? layouts.AppLayout : layouts.LandingLayout;
  }, [initSearch]);
  return (
    <Suspense
      fallback={
        <div className="flex flex-auto flex-col h-[100vh]">cargando...</div>
      }
    >
      <AppLayout />
    </Suspense>
  );
};
