import Config from "../api/Config";
import type { Episode } from "../models/Episode";

interface Props {
  episode: Episode;
  onSelect: () => void;
}

const EpisodeCard = ({ episode, onSelect }: Props) => {
  return (
    <div className="col-4 episode-card" onClick={onSelect}>
      <div className="card">
        <img src={Config.tmdbLandscapeMedia + episode.backdrop_path} />
        <div className="card-body align-items-center text-white p-1 mx-1 d-flex">
          <div className="bebas-light">{episode.name}</div>
          <div className="episode-number align-middle ms-auto">
            Episode #{episode.episode_number}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
