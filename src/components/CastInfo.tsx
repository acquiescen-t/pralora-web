import { useState, useEffect } from "react";
import type { Episode } from "../models/Episode";
import type { Movie } from "../models/Movie";
import type { TvSeries } from "../models/TvSeries";
import api from "../api/InternalApi";
import { Endpoints } from "../api/Endpoints";
import type { CastingDetailsDTO } from "../models/CastingDetailsDTO";
import Config from "../api/Config";
import ImageNotFound from "../assets/poster-not-found.jpg";
import { Link } from "react-router-dom";

interface Props {
  media: Movie | TvSeries | Episode;
}

const CastInfo = ({ media }: Props) => {
  const [castDetails, setCastDetails] = useState<CastingDetailsDTO[]>([]);
  useEffect(() => {
    api
      .get(Endpoints.findCastingDetailsByMediaTmdbId(media.tmdbId.toString()))
      .then((response) => setCastDetails(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="cast-info">
      <div className="page-header ps-3 pb-0">Starring</div>
      <div className="row p-3 g-4">
        {castDetails.map((castDetail) => (
          <div className="cast-col">
            <div className="card text-center">
              <Link
                to={"/actors/" + castDetail.personTmdbId}
                className="text-white"
              >
                <img
                  src={Config.tmdbPortraitMedia + castDetail.profilePath}
                  className="card-img-top"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = ImageNotFound;
                  }}
                />
                <div className="card-body">
                  <div className="bebas-medium">{castDetail.personName}</div>
                  <div className="cast-character">{castDetail.character}</div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastInfo;
