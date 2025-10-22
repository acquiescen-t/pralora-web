import type { TvSeries } from "../models/TvSeries";
import type { Movie } from "../models/Movie";
import Config from "../api/Config";
import { GENRES } from "../constants/Genres";
import { Link } from "react-router-dom";
import {
  CalendarBlankIcon,
  PlayCircleIcon,
  PopcornIcon,
  UserIcon,
} from "@phosphor-icons/react";

interface Props {
  media: Movie | TvSeries;
}

const PreviewMedia = ({ media }: Props) => {
  const getMediaTitle = (media: Movie | TvSeries) =>
    "title" in media ? media.title : media.name;
  const releaseYear = (media: Movie | TvSeries) =>
    "title" in media
      ? new Date(media.release_date).getFullYear()
      : new Date(media.first_air_date).getFullYear();

  return (
    <div className="card">
      {media ? (
        <div className="pt-4">
          <div className="backdrop d-flex justify-content-end">
            <img
              src={Config.tmdbLandscapeMedia + media.backdrop_path}
              className="img-fluid rounded"
            />
          </div>
          <div className="card-body p-1 text-white">
            <div className="row">
              <div className="col">
                <div className="preview-title py-2">{getMediaTitle(media)}</div>
                <div className="preview-genres">
                  {media.genre.map((id) => (
                    <Link to={"/genres/" + id}>
                      <span key={id} className="badge badge-green me-2">
                        {GENRES[id]}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="col d-flex justify-content-end align-items-end">
                <div className="preview-stats">
                  <CalendarBlankIcon size={24} className="me-2" />
                  {releaseYear(media)}
                  <PopcornIcon size={24} className="ms-4 me-2" />
                  {Math.round(media.vote_average * 10) / 10}
                  <UserIcon size={24} className="ms-4 me-2" />
                  {media.vote_count} votes
                </div>
              </div>
            </div>
            <div className="preview-overview py-2">{media.overview}</div>
            <div className="preview-genres pt-2">
              <div className="row">
                <div className="col d-flex">
                  <button type="button" className="btn btn-danger pt-1">
                    <PlayCircleIcon size={20} className="me-2" />
                    <span className="bebas">Watch</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default PreviewMedia;
