export const ROUTES = {
  HOME: "/",
  CREATE_ACCOUNT: "/create-account",
  ACCOUNTS: "/accounts",
  TRANSFERS: "/transfers",
  SERVICES: "/services",
  LOGIN: "/login",
} as const;

export type RouteKey = keyof typeof ROUTES;

export const getRoute = (route: RouteKey): string => ROUTES[route];
