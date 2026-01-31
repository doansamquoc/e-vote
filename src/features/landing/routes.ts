import LandingLayout from "@/layouts/landing-layout";
import type { RouteObject } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import AboutPage from "./pages/about-page";

export const LandingRoutes: RouteObject[] = [
  {
    path: "/",
    Component: LandingLayout,
    children: [
      { index: true, Component: LandingPage },
      { path: "about", Component: AboutPage },
    ],
  },
];
