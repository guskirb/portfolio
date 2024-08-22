import { createBrowserRouter, Navigate } from "react-router-dom";

import HomeRoute from "./app/home";

export const createRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <HomeRoute />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);
