import { Name } from "../name.mode"
import { PalParkEncounterSpecies } from "./palParkEncounterSpecies.model"

export interface PalParkArea {
  id: number
  name: string
  names: Name[]
  pokemon_encounters: PalParkEncounterSpecies[]
}
