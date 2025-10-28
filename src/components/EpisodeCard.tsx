import Config from "../api/Config";
import type { Episode } from "../models/Episode";

interface Props {
  episode: Episode;
}

const EpisodeCard = ({ episode }: Props) => {
  return (
    <div className="card episode-card">
      <img src={Config.tmdbLandscapeMedia + episode.backdrop_path} />
    </div>
  );
};

export default EpisodeCard;
