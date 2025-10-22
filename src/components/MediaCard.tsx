import type { Movie } from "../models/Movie";
import Config from "../api/Config";
import ImageNotFound from "../assets/poster-not-found.jpg";
import type { TvSeries } from "../models/TvSeries";

interface Props {
  media: Movie | TvSeries;
  onSelectMedia: (media: Movie | TvSeries) => void;
}

const MediaCard = ({ media, onSelectMedia }: Props) => {
  return (
    <div className="card border-0 overflow-hidden">
      <img
        src={Config.tmdbPortraitMedia + media.poster_path}
        className="card-img-top"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = ImageNotFound;
        }}
        onClick={() => onSelectMedia(media)}
      />
    </div>
  );
};

export default MediaCard;
