import type { ComponentType } from "react";

export type AppRouteProps<T> = {
  component: ComponentType<T>;
  routeKey: string;
};

const AppRoute = <T extends Record<string, unknown>>({
  component: Component,
  routeKey: key,
  ...props
}: AppRouteProps<T>) => {
  return <Component key={key} {...(props as T)} />;
};

export default AppRoute;
