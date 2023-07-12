import { NamedApiResource } from "../namedAPIReosurce.mode";
import { EncounterVersionDetails } from "./encounterVersionDetails.model";

export interface EncounterMethodRate {
  encounter_method: NamedApiResource
  version_details: EncounterVersionDetails[]
}
