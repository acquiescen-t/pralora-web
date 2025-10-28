export class Person {
  id: number;
  tmdbId: number;
  gender: number;
  name: string;
  profile_path: string;

  constructor(
    id: number,
    tmdbId: number,
    gender: number,
    name: string,
    profile_path: string
  ) {
    this.id = id;
    this.tmdbId = tmdbId;
    this.gender = gender;
    this.name = name;
    this.profile_path = profile_path;
  }
}
