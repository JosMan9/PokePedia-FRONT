import { NamedApiResource } from "../namedAPIReosurce.mode"
import { PokemonSpeciesGender } from "./pokemonSpeciesGender.model"

export interface Gender {
  id: number
  name: string
  pokemon_species_details: PokemonSpeciesGender[]
  required_for_evolution: NamedApiResource[]
}
