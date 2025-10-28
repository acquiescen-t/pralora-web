export class Casting {
  mediaTmdbId: number;
  personTmdbId: number;
  character: string;

  constructor(mediaTmdbId: number, personTmdbId: number, character: string) {
    this.mediaTmdbId = mediaTmdbId;
    this.personTmdbId = personTmdbId;
    this.character = character;
  }
}
