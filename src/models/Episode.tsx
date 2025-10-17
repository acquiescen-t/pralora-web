export class Episode {
  id: number;
  tmdbId: number;
  genre: number[];
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  filePath: string;
  air_date: Date;
  episode_number: number;
  name: string;
  runtime: number;
  season_number: number;

  constructor(
    id: number,
    tmdbId: number,
    genre: number[],
    overview: string,
    poster_path: string,
    backdrop_path: string,
    vote_average: number,
    vote_count: number,
    filePath: string,
    air_date: Date,
    episode_number: number,
    name: string,
    runtime: number,
    season_number: number
  ) {
    this.id = id;
    this.tmdbId = tmdbId;
    this.genre = genre;
    this.overview = overview;
    this.poster_path = poster_path;
    this.backdrop_path = backdrop_path;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
    this.filePath = filePath;
    this.air_date = air_date;
    this.episode_number = episode_number;
    this.name = name;
    this.runtime = runtime;
    this.season_number = season_number;
  }
}
