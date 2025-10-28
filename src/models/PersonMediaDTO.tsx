import type { Movie } from "./Movie";
import type { TvSeries } from "./TvSeries";

export class PersonMediaDTO {
  personName: string;
  profilePath: string;
  movies: Movie[];
  tvSeries: TvSeries[];

  constructor(
    personName: string,
    profilePath: string,
    movies: Movie[],
    tvSeries: TvSeries[]
  ) {
    this.personName = personName;
    this.profilePath = profilePath;
    this.movies = movies;
    this.tvSeries = tvSeries;
  }
}
