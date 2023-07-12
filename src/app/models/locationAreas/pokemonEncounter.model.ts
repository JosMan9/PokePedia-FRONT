import { NamedApiResource } from "../namedAPIReosurce.mode";
import { VersionEncounterDetail } from "../versionEncounterDetail.model";

export interface PokemonEncounter {
  pokemon: NamedApiResource
  version_details: VersionEncounterDetail[]
}
