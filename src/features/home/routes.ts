import type { RouteObject } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "@/layouts/MainLayout";
import AboutPage from "./pages/AboutPage";
import CreatePage from "./pages/CreatePage";
import VotePage from "./pages/VotePage";

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
        path: "/create",
        Component: CreatePage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/votes",
        Component: VotePage,
      },
    ],
  },
];
