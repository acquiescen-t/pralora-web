import { Link } from "react-router-dom";
import type { Movie } from "../models/Movie";
import Config from "../api/Config";
import ImageNotFound from "../assets/poster-not-found.jpg";
import type { TvSeries } from "../models/TvSeries";

interface Props {
  media: Movie | TvSeries;
}

const MediaCard = ({ media }: Props) => {
  // const getMediaTitle = (media: Movie | TvSeries) =>
  //   "title" in media ? media.title : media.name;
  const getMediaLink = (media: Movie | TvSeries) =>
    "title" in media ? "/movies/id/" : "/tv-series/id/";
  return (
    <div className="card overflow-hidden">
      <Link to={getMediaLink(media).concat(String(media.id))}>
        <img
          src={Config.externalApiMediaUrl + media.poster_path}
          className="card-img-top"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = ImageNotFound;
          }}
        />
        {/* <ul className="list-group list-group-flush">
          <li className="list-group-item p-3">{getMediaTitle(media)}</li>
        </ul> */}
      </Link>
    </div>
  );
};

export default MediaCard;
