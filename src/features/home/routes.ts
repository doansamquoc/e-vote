import type { RouteObject } from "react-router-dom";
import HomePage from "./pages/home-page";
import MainLayout from "@/layouts/main-layout";
import AboutPage from "./pages/about-page";
import CreatePage from "./pages/create-page";
import VotePage from "./pages/vote-page";

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
