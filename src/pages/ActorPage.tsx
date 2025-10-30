import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/InternalApi";
import type { PersonMediaDTO } from "../models/PersonMediaDTO";
import MediaCard from "../components/MediaCard";
import type { Movie } from "../models/Movie";
import type { TvSeries } from "../models/TvSeries";
import PreviewMedia from "../components/PreviewMedia";
import Config from "../api/Config";
import { Endpoints } from "../api/Endpoints";

const ActorPage = () => {
  const { tmdbId } = useParams() as { tmdbId: string };
  const [personMedia, setPersonMedia] = useState<PersonMediaDTO>();

  useEffect(() => {
    api
      .get(Endpoints.findMediaByPersonTmdbId(tmdbId))
      .then((response) => setPersonMedia(response.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (personMedia) {
      document.title = personMedia.personName;
      setSelectedMedia(
        personMedia.movies[0] ? personMedia.movies[0] : personMedia.tvSeries[0]
      );
    }
  }, [personMedia]);

  const [selectedMedia, setSelectedMedia] = useState<Movie | TvSeries>();

  const handleSelectMedia = (media: Movie | TvSeries) => {
    setSelectedMedia(media);
  };

  return (
    <div className="row">
      {personMedia && (
        <div className="col-6 py-5 actor-page">
          <div className="d-flex pt-3">
            <img
              src={Config.tmdbPortraitMedia + personMedia.profilePath}
              className="ms-3 rounded-circle object-fit-cover"
              style={{ width: "60px", height: "60px" }}
            />
            <div className="page-header">{personMedia.personName}</div>
          </div>

          <div className="row movies-starred-in">
            <div className="py-1 scrollable-section">
              <div className="page-header">
                Movies starring {personMedia.personName}
              </div>
              <div className="ps-3 row g-3">
                {personMedia.movies.map((movie) => (
                  <div key={movie.id} className="col-12 col-md-3">
                    <MediaCard
                      media={movie}
                      onSelectMedia={handleSelectMedia}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="tv-series-starred-in">
            {personMedia.tvSeries.map((tvSeries) => (
              <MediaCard media={tvSeries} onSelectMedia={handleSelectMedia} />
            ))}
          </div>
        </div>
      )}
      {selectedMedia && <PreviewMedia media={selectedMedia} />}
    </div>
  );
};

export default ActorPage;
