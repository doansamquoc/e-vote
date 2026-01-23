import { useRoutes } from "react-router-dom";
import { AuthRoutes } from "./features/auth/routes";
import { HomeRoutes } from "./features/home/routes";

export const appRoutes = [...AuthRoutes, ...HomeRoutes];

export function AppRouter() {
  const routing = useRoutes(appRoutes);
  return routing;
}
