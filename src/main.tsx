import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Layout from "./Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import TvSeriesPage from "./pages/TvSeriesPage.tsx";
import ActorsPage from "./pages/ActorsPage.tsx";
import GenresPage from "./pages/GenresPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import WatchPage from "./pages/WatchPage.tsx";
import GenrePage from "./pages/GenrePage.tsx";
import MoviesPage from "./pages/MoviesPage.tsx";
import ActorPage from "./pages/ActorPage.tsx";
import TvSeriesSelectorPage from "./pages/TvSeriesSelectorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "movies", element: <MoviesPage /> },
      { path: "media/:tmdbId", element: <WatchPage /> },
      { path: "tv-series", element: <TvSeriesPage /> },
      { path: "tv-series/:tmdbId", element: <TvSeriesSelectorPage /> },
      { path: "actors", element: <ActorsPage /> },
      { path: "actors/:tmdbId", element: <ActorPage /> },
      { path: "genres", element: <GenresPage /> },
      { path: "genres/:genreId", element: <GenrePage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
