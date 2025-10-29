import type { Episode } from "../models/Episode";
import type { Season } from "../models/Season";
import EpisodeCard from "./EpisodeCard";

interface Props {
  season: Season;
  onSelectEpisode: (episode: Episode) => void;
}

const SeasonEpisodes = ({ season, onSelectEpisode }: Props) => {
  return (
    <div className="season-episodes">
      <div className="card-header bebas-medium py-2">
        {"Season " + season.season_number}
      </div>
      <div className="row g-3">
        {season.episode.map((e) => (
          <EpisodeCard
            key={e.id}
            episode={e}
            onSelect={() => onSelectEpisode(e)}
          />
        ))}
      </div>
    </div>
  );
};

export default SeasonEpisodes;
