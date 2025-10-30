import type { Person } from "../models/Person";
import Config from "../api/Config";
import type { CastingDetailsDTO } from "../models/CastingDetailsDTO";
import { Link } from "react-router-dom";
import ImageNotFound from "../assets/poster-not-found.jpg";

interface Props {
  personDetails: Person | CastingDetailsDTO;
}

const PersonCard = ({ personDetails }: Props) => {
  const keyId =
    "mediaTmdbId" in personDetails
      ? personDetails.mediaTmdbId + personDetails.personTmdbId
      : personDetails.tmdbId;
  const tmdbId =
    "mediaTmdbId" in personDetails
      ? personDetails.mediaTmdbId
      : personDetails.tmdbId;
  const profilePath =
    "mediaTmdbId" in personDetails
      ? personDetails.profilePath
      : personDetails.profile_path;
  const personName =
    "mediaTmdbId" in personDetails
      ? personDetails.personName
      : personDetails.name;
  return (
    <div key={keyId} className="cast-col">
      <div className="card text-center">
        <Link to={"/actors/" + tmdbId} className="text-white">
          <img
            src={Config.tmdbPortraitMedia + profilePath}
            className="card-img-top"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = ImageNotFound;
            }}
          />
          <div className="card-body">
            <div className="bebas-medium">{personName}</div>
            {"character" in personDetails && (
              <div className="cast-character">{personDetails.character}</div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PersonCard;
