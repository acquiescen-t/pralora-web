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
  const [selectedMovie, setSelectedMovie] = useState<Movie>();

  useEffect(() => {
    api
      .get(Endpoints.findMoviesByGenreId(genreId))
      .then((response) => setMovies(response.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (movies) setSelectedMovie(movies[0]);
  }, [movies]);

  const handleSelectMedia = (media: Movie | TvSeries) => {
    let mediaTitle = "title" in media ? media.title : media.name;
    console.log("Clicked on " + mediaTitle);
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
        </>
      )}
    </div>
  );
};

export default GenrePage;
