import { useEffect, useState } from "react";
import api from "../api/InternalApi";
import { Endpoints } from "../api/Endpoints";
import type { Genre } from "../models/Genre";
import GenreCard from "../components/GenreCard";

export default function GenresPage() {
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    api
      .get(Endpoints.getAllGenres())
      .then((response) => setGenres(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="cast-info">
      <div className="page-header">All Genres</div>
      <div className="row p-3 g-4">
        {genres.map((genre) => (
          <GenreCard key={genre.tmdbId} genre={genre} />
        ))}
      </div>
    </div>
  );
}
