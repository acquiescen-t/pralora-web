import { useEffect, useState } from "react";
import { Endpoints } from "../api/Endpoints";
import api from "../api/InternalApi";
import type { Movie } from "../models/Movie";
import MediaCard from "../components/MediaCard";
import Config from "../api/Config";
import type { TvSeries } from "../models/TvSeries";
import PreviewMedia from "../components/PreviewMedia";

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    api
      .get(Endpoints.getAllMovies())
      .then((response) => setMovies(response.data))
      .catch((error) => console.error(error));
  }, []);

  const [selectedMovie, setSelectedMovie] = useState<Movie>();
  useEffect(() => {
    setSelectedMovie(movies[0]);
  }, [movies]);

  const handleSelectMedia = (media: Movie | TvSeries) => {
    "title" in media && setSelectedMovie(media);
  };

  return (
    <div className="pt-4 ps-3">
      <PreviewMedia media={selectedMovie!}></PreviewMedia>
      <div className="container-fluid px-0">
        <div className="row g-2">
          {movies.map((movie) => (
            <div className="col-2">
              <MediaCard
                media={movie}
                onSelectMedia={handleSelectMedia}
              ></MediaCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
