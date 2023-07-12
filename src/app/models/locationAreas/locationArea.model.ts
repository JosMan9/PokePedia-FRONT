import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"
import { EncounterMethodRate } from "./encounterMethodRate.model"
import { PokemonEncounter } from "./pokemonEncounter.model"

export interface LocationArea {
  id: number
  name: string
  game_index: number
  encounter_method_rates: EncounterMethodRate[]
  location: NamedApiResource
  names: Name[]
  pokemon_encounters: PokemonEncounter[]
}
