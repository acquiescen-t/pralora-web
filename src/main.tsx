import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Layout from "./Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import MoviesPage from "./pages/MoviesPage.tsx";
import TvSeriesPage from "./pages/TvSeriesPage.tsx";
import ActorsPage from "./pages/ActorsPage.tsx";
import GenresPage from "./pages/GenresPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "movies", element: <MoviesPage /> },
      { path: "tv-series", element: <TvSeriesPage /> },
      { path: "actors", element: <ActorsPage /> },
      { path: "genres", element: <GenresPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
