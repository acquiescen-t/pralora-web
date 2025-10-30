export class Person {
  id: number;
  tmdbId: number;
  gender: number;
  name: string;
  profilePath: string;

  constructor(
    id: number,
    tmdbId: number,
    gender: number,
    name: string,
    profilePath: string
  ) {
    this.id = id;
    this.tmdbId = tmdbId;
    this.gender = gender;
    this.name = name;
    this.profilePath = profilePath;
  }
}
