import { useParams } from "react-router-dom";
import { TvSeries } from "../models/TvSeries";
import { useEffect, useState } from "react";
import api from "../api/InternalApi";
import { Endpoints } from "../api/Endpoints";
import SeasonEpisodes from "../components/SeasonEpisodes";
import type { Episode } from "../models/Episode";
import PreviewMedia from "../components/PreviewMedia";

const TvSeriesSelectorPage = () => {
  const { tmdbId } = useParams() as { tmdbId: string };
  const [tvSeries, setTvSeries] = useState<TvSeries>();
  const [selectedMedia, setSelectedMedia] = useState<TvSeries | Episode>();

  useEffect(() => {
    api
      .get(Endpoints.findTvSeriesByTmdbId(tmdbId))
      .then((response) => setTvSeries(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="row">
      <div className="col-6 tv-series-selector pt-4 text-white scrollable-section">
        {tvSeries && (
          <div className="season p-3">
            {tvSeries.season.map((s) => (
              <SeasonEpisodes
                key={s.id}
                season={s}
                onSelectEpisode={setSelectedMedia}
              />
            ))}
          </div>
        )}
      </div>
      {selectedMedia && <PreviewMedia media={selectedMedia} />}
    </div>
  );
};

export default TvSeriesSelectorPage;
