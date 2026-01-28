import type { RouteObject } from "react-router-dom";
import LoginPage from "./pages/login-page";
import AuthLayout from "@/layouts/auth-layout";

export const AuthRoutes: RouteObject[] = [
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: LoginPage,
      },
    ],
  },
];
