import { Encounter } from "./encounter.model";
import { NamedApiResource } from "./namedAPIReosurce.mode";

export interface VersionEncounterDetail {
  version: NamedApiResource
  max_chance: number
  encounter_details: Encounter[]
}
