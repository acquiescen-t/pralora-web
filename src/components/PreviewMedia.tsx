import type { TvSeries } from "../models/TvSeries";
import type { Movie } from "../models/Movie";
import Config from "../api/Config";
import { GENRES } from "../constants/Genres";

interface Props {
  media: Movie | TvSeries;
}

const PreviewMedia = ({ media }: Props) => {
  const getMediaTitle = (media: Movie | TvSeries) =>
    "title" in media ? media.title : media.name;

  return (
    <div className="card">
      {media ? (
        <div className="card mb-2">
          <div className="row g-0">
            <div className="col">
              <div className="card-body">
                <h1 className="preview-title">{getMediaTitle(media)}</h1>
                <p className="text-white">{media.overview}</p>
                {media.genre.map((id) => (
                  <span key={id} className="badge bg-secondary me-2">
                    {GENRES[id]}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-7">
              <img src={Config.tmdbLandscapeMedia + media.backdrop_path} />
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
