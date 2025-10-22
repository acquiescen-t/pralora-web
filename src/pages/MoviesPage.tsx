import { useEffect, useState } from "react";
import { Endpoints } from "../api/Endpoints";
import api from "../api/InternalApi";
import type { Movie } from "../models/Movie";
import MediaCard from "../components/MediaCard";
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
    <div className="pt-3 ps-3">
      <div className="row">
        <div className="col-6">
          <div className="d-flex overflow-auto movies-scroll">
            {movies.map((movie) => (
              <div key={movie.id} className="media-card-col">
                <MediaCard
                  media={movie}
                  onSelectMedia={handleSelectMedia}
                ></MediaCard>
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <PreviewMedia media={selectedMovie!}></PreviewMedia>
        </div>
      </div>
    </div>
  );
}
