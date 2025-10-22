import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "../models/Movie";
import { TvSeries } from "../models/TvSeries";
import { Endpoints } from "../api/Endpoints";
import api from "../api/InternalApi";
import MediaCard from "../components/MediaCard";

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    api
      .get(Endpoints.getRandomMovies("6"))
      .then((response) => setMovies(response.data))
      .catch((error) => console.error(error));
  }, []);

  const [tvSeries, setTvSeries] = useState<TvSeries[]>([]);
  useEffect(() => {
    api
      .get(Endpoints.getRandomTvSeries("6"))
      .then((response) => setTvSeries(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleSelectMedia = (media: Movie | TvSeries) => {
    let mediaTitle = "title" in media ? media.title : media.name;
    console.log("Clicked on " + mediaTitle);
  };

  const getMediaLink = (media: Movie | TvSeries) =>
    "title" in media ? "/movies/id/" : "/tv-series/id/";

  return (
    <div className="ps-3">
      <div className="browse-movies pt-3">
        <Link to="/movies" className="card-header">
          Browse All Movies
        </Link>
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-2 py-2">
              <Link to={getMediaLink(movie).concat(String(movie.id))}>
                <MediaCard media={movie} onSelectMedia={handleSelectMedia} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="browse-tv-series pt-3">
        <Link to="/tv-series" className="card-header">
          Browse All TV Series
        </Link>
        <div className="row">
          {tvSeries.map((tv) => (
            <div key={tv.id} className="col-2 py-2">
              <MediaCard media={tv} onSelectMedia={handleSelectMedia} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
