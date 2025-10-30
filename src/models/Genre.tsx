export class Genre {
  id: number;
  tmdbId: number;
  name: string;

  constructor(id: number, tmdbId: number, name: string) {
    this.id = id;
    this.tmdbId = tmdbId;
    this.name = name;
  }
}
