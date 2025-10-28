import {
  CalendarBlankIcon,
  PopcornIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { GENRES } from "../constants/Genres";
import type { Movie } from "../models/Movie";
import type { TvSeries } from "../models/TvSeries";
import type { Episode } from "../models/Episode";

interface Props {
  media: Movie | TvSeries | Episode;
}

export default function MediaInfo({ media }: Props) {
  const mediaReleaseDate =
    "release_date" in media
      ? media.release_date
      : "first_air_date" in media
      ? media.first_air_date
      : media.air_date;
  const mediaTitle = "title" in media ? media.title : media.name;

  return (
    <div className="card-body p-1 text-white">
      <div className="media-info-title bebas-light py-2">{mediaTitle}</div>
      <div className="d-flex pt-1">
        <div className="media-info-genres">
          {media.genre.map((id) => (
            <Link key={id} to={"/genres/" + id}>
              <span className="badge badge-green me-2 bebas-light">
                {GENRES[id]}
              </span>
            </Link>
          ))}
        </div>
        <div className="preview-stats ms-auto">
          <CalendarBlankIcon size={24} className="me-2" />
          {new Date(mediaReleaseDate).getFullYear()}
          <PopcornIcon size={24} className="ms-4 me-2" />
          {Math.round(media.vote_average * 10) / 10}
          <UserIcon size={24} className="ms-4 me-2" />
          {media.vote_count} votes
        </div>
      </div>
      <div className="media-info-overview py-2">{media.overview}</div>
    </div>
  );
}
