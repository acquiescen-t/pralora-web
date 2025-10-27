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
  const [tvSeries, setTvSeries] = useState<TvSeries[]>();
  const [selectedMedia, setSelectedMedia] = useState<Movie | TvSeries>();

  useEffect(() => {
    api
      .get(Endpoints.findMoviesByGenreId(genreId))
      .then((response) => setMovies(response.data))
      .catch((error) => console.error(error));
    api
      .get(Endpoints.findTvSeriesByGenreId(genreId))
      .then((response) => setTvSeries(response.data))
      .catch((error) => console.error(error));
  }, [genreId]);

  useEffect(() => {
    if (movies && selectedMedia == null) setSelectedMedia(movies[0]);
  }, [movies]);
  useEffect(() => {
    if (tvSeries && selectedMedia == null) setSelectedMedia(tvSeries[0]);
  }, [tvSeries]);

  const handleSelectMedia = (media: Movie | TvSeries) => {
    setSelectedMedia(media);
  };

  return (
    <div className="py-3 ps-3">
      <div className="row">
        <div className="col-6 pt-4">
          {movies && movies.length > 0 && (
            <>
              <div className="page-header">
                Filtered {movies.length} {GENRES[parseInt(genreId)]} Movies
              </div>
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
            </>
          )}
          {tvSeries && tvSeries.length > 0 && (
            <>
              <div className="page-header">
                Filtered {tvSeries.length} {GENRES[parseInt(genreId)]} Tv Series
              </div>
              <div className="container overflow-auto media-scroll">
                <div className="row g-3">
                  {tvSeries.map((tv) => (
                    <div key={tv.id} className="col-12 col-md-3">
                      <MediaCard
                        media={tv}
                        onSelectMedia={handleSelectMedia}
                      ></MediaCard>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        <div className="col-6 pt-5">
          {selectedMedia && <PreviewMedia media={selectedMedia}></PreviewMedia>}
        </div>
      </div>
    </div>
  );
};

export default GenrePage;
