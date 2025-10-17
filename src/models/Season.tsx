import type { Episode } from "./Episode";

export class Season {
  id: number;
  episode: Episode[];
  air_date: Date;
  tmdbId: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;

  constructor(
    id: number,
    episode: Episode[],
    air_date: Date,
    tmdbId: number,
    name: string,
    overview: string,
    poster_path: string,
    season_number: number,
    vote_average: number
  ) {
    this.id = id;
    this.episode = episode;
    this.air_date = air_date;
    this.tmdbId = tmdbId;
    this.name = name;
    this.overview = overview;
    this.poster_path = poster_path;
    this.season_number = season_number;
    this.vote_average = vote_average;
  }
}
