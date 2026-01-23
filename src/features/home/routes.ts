import type { RouteObject } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "@/layouts/MainLayout";
import AboutPage from "./pages/AboutPage";

export const HomeRoutes: RouteObject[] = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
    ],
  },
];
