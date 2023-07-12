import { Description } from "../description.model"
import { FlavorText } from "../flavorText.model"
import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"
import { Genus } from "./genus.model"
import { PalParkEncounterArea } from "./palParkEncounterArea.model"
import { PokemonSpeciesDexEntry } from "./pokemonSpeciesDexEntry.model"
import { PokemonSpeciesVariety } from "./pokemonSpeciesVariety.model"

export interface PokemonSpecies {
  id: number
  name: string
  order: number
  gender_rate: number
  capture_rate: number
  base_hapiness: number
  is_baby: number
  is_legendary: number
  is_mythical: number
  hatch_counter: number
  has_gender_differences: boolean
  forms_switchable: boolean
  growth_rate: NamedApiResource
  pokedex_numbers: PokemonSpeciesDexEntry[]
  egg_groups: NamedApiResource[]
  color: NamedApiResource
  shape: NamedApiResource
  evolves_from_species: NamedApiResource
  habitat: NamedApiResource
  generation: NamedApiResource
  names: Name[]
  pal_park_encounters: PalParkEncounterArea[]
  flavor_text_entries: FlavorText[]
  form_descriptions: Description[]
  genera: Genus[]
  varieties: PokemonSpeciesVariety[]
}
