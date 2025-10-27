import { useEffect, useState } from "react";
import type { Movie } from "../models/Movie";
import api from "../api/InternalApi";
import { Endpoints } from "../api/Endpoints";
import { useParams } from "react-router-dom";
import MediaCard from "../components/MediaCard";
import PreviewMedia from "../components/PreviewMedia";
import type { TvSeries } from "../models/TvSeries";
import { GENRES } from "../constants/Genres";

const GenrePage = () => {
  const { genreId } = useParams() as { genreId: string };
  const [movies, setMovies] = useState<Movie[]>();
  const [selectedMedia, setSelectedMedia] = useState<Movie | TvSeries>();

  useEffect(() => {
    api
      .get(Endpoints.findMoviesByGenreId(genreId))
      .then((response) => setMovies(response.data))
      .catch((error) => console.error(error));
  }, [genreId]);

  useEffect(() => {
    if (movies && selectedMedia == null) setSelectedMedia(movies[0]);
  }, [movies]);

  const handleSelectMedia = (media: Movie | TvSeries) => {
    setSelectedMedia(media!);
  };

  return (
    <div className="py-3 ps-3">
      {movies && (
        <>
          {genreId && (
            <div className="genre-header">
              Filtered {movies.length} {GENRES[parseInt(genreId)]} Movies
            </div>
          )}

          <div className="row">
            <div className="col-6 pt-4">
              <div className="container overflow-auto movies-scroll">
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
            <div className="col-6">
              {selectedMedia && (
                <PreviewMedia media={selectedMedia}></PreviewMedia>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GenrePage;
