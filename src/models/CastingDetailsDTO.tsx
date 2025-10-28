export class CastingDetailsDTO {
  mediaTmdbId: number;
  personTmdbId: number;
  character: string;
  personName: string;
  profilePath: string;

  constructor(
    mediaTmdbId: number,
    personTmdbId: number,
    character: string,
    personName: string,
    profilePath: string
  ) {
    this.mediaTmdbId = mediaTmdbId;
    this.personTmdbId = personTmdbId;
    this.character = character;
    this.personName = personName;
    this.profilePath = profilePath;
  }
}
