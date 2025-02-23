export type authority = "TEST";

export interface IRoute {
  key: string;

  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  layout?: string;
  subRoutes?: IRoute[];
  authority: authority[]; // Estos en teorian son los roles que pueden acceder a la ruta
  canNavigate?: boolean[];
}
