import type { RouteObject } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AuthLayout from "@/layouts/AuthLayout";

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
