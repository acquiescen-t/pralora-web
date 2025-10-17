export class Movie {
  id: number;
  tmdbId: number;
  genre: number[];
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  filePath: string;
  title: string;
  release_date: Date;

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
    title: string,
    release_date: Date
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
    this.title = title;
    this.release_date = release_date;
  }
}
