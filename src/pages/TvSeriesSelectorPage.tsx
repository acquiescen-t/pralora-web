import { useParams } from "react-router-dom";
import { TvSeries } from "../models/TvSeries";
import { useEffect, useState } from "react";
import api from "../api/InternalApi";
import { Endpoints } from "../api/Endpoints";
import SeasonEpisodes from "../components/SeasonEpisodes";

const TvSeriesSelectorPage = () => {
  const { tmdbId } = useParams() as { tmdbId: string };
  const [tvSeries, setTvSeries] = useState<TvSeries>();

  useEffect(() => {
    api
      .get(Endpoints.findTvSeriesByTmdbId(tmdbId))
      .then((response) => setTvSeries(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="tv-series-selector py-5 text-white">
      {tvSeries && (
        <div className="season p-3">
          {tvSeries.season.map((s) => (
            <SeasonEpisodes season={s} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TvSeriesSelectorPage;
