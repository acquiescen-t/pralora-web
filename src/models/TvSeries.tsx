import type { Season } from "./Season";

export class TvSeries {
  id: number;
  tmdbId: number;
  genre: number[];
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  filePath: string;
  name: string;
  first_air_date: Date;
  season: Season[];

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
    name: string,
    first_air_date: Date,
    season: Season[]
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
    this.name = name;
    this.first_air_date = first_air_date;
    this.season = season;
  }
}
