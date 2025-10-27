import { useEffect, useState } from "react";
import { Endpoints } from "../api/Endpoints";
import api from "../api/InternalApi";
import type { Movie } from "../models/Movie";
import MediaCard from "../components/MediaCard";
import PreviewMedia from "../components/PreviewMedia";
import type { TvSeries } from "../models/TvSeries";

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    api
      .get(Endpoints.getAllMovies())
      .then((response) => setMovies(response.data))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    setSelectedMedia(movies[0]);
  }, [movies]);

  const [selectedMedia, setSelectedMedia] = useState<Movie | TvSeries>();

  const handleSelectMedia = (media: Movie | TvSeries) => {
    setSelectedMedia(media);
  };

  return (
    <div className="pt-3 ps-3">
      <div className="row">
        <div className="col-6 py-4">
          <div className="page-header">All Movies</div>
          <div className="container overflow-auto media-scroll">
            <div className="row g-3">
              {movies.map((movie) => (
                <div key={movie.id} className="col-12 col-md-3">
                  <MediaCard
                    media={movie}
                    onSelectMedia={handleSelectMedia}
                  ></MediaCard>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-6 py-5">
          {selectedMedia && <PreviewMedia media={selectedMedia}></PreviewMedia>}
        </div>
      </div>
    </div>
  );
}
