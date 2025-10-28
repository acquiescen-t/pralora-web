import type { Season } from "../models/Season";
import EpisodeCard from "./EpisodeCard";

interface Props {
  season: Season;
}

const SeasonEpisodes = ({ season }: Props) => {
  return (
    <div className="card season-episodes">
      <div className="card-header">{"Season " + season.season_number}</div>
      {season.episode.map((e) => (
        <EpisodeCard episode={e} />
      ))}
    </div>
  );
};

export default SeasonEpisodes;
