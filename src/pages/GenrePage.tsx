import { useEffect, useState } from "react";
import type { Movie } from "../models/Movie";
import api from "../api/InternalApi";
import { Endpoints } from "../api/Endpoints";
import { useParams } from "react-router-dom";
import MediaCard from "../components/MediaCard";
import PreviewMedia from "../components/PreviewMedia";

const GenrePage = () => {
  const { genreId } = useParams<{ genreId: string }>();
  const [movies, setMovies] = useState<Movie[]>();
  useEffect(() => {
    api
      .get(Endpoints.findMoviesByGenreId(genreId!))
      .then((response) => setMovies(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="pt-3 ps-3">
      <div className="row">
        <div className="col-6 pt-4">
          <div className="container overflow-auto movies-scroll">
            <div className="row g-3">
              {movies &&
                movies.map((movie) => (
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
        <div className="col-6">
          <PreviewMedia media={selectedMovie!}></PreviewMedia>
        </div>
      </div>
    </div>
  );
};

export default GenrePage;
