export type AppConfig = {
  apiUrl: string;
  authenticatedEntryPath: string;
  unAuthenticatedEntryPath: string;
  locale: string;
};

const appConfig: AppConfig = {
  apiUrl: "http://localhost:3000",
  authenticatedEntryPath: "/app",
  unAuthenticatedEntryPath: "/home",
  locale: "en",
};

export default appConfig;
