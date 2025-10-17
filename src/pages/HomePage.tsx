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

  return (
    <div className="ps-3">
      <div className="browse-movies pt-3">
        <Link to="/movies" className="card-header">
          Browse All Movies
        </Link>
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-2 pt-3">
              <MediaCard media={movie} />
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
            <div key={tv.id} className="col-2 pt-3">
              <MediaCard media={tv} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
