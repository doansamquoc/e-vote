import { useRoutes } from "react-router-dom";
import { AuthRoutes } from "./features/auth/routes";
import { HomeRoutes } from "./features/home/routes";
import { LandingRoutes } from "./features/landing/routes";

export const appRoutes = [...LandingRoutes, ...AuthRoutes, ...HomeRoutes];

export function AppRouter() {
  const routing = useRoutes(appRoutes);
  return routing;
}
