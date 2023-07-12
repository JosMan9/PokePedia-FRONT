import { NamedApiResource } from "../namedAPIReosurce.mode";
import { VersionEncounterDetail } from "../versionEncounterDetail.model";

export interface LocationAreaEncounter {
  location_area: NamedApiResource
  version_details: VersionEncounterDetail[]
}
