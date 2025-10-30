import { useState, useEffect } from "react";
import type { Episode } from "../models/Episode";
import type { Movie } from "../models/Movie";
import type { TvSeries } from "../models/TvSeries";
import api from "../api/InternalApi";
import { Endpoints } from "../api/Endpoints";
import type { CastingDetailsDTO } from "../models/CastingDetailsDTO";
import PersonCard from "./PersonCard";

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
          <PersonCard personDetails={castDetail} />
        ))}
      </div>
    </div>
  );
};

export default CastInfo;
