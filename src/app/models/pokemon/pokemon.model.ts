import { NamedApiResource } from "../namedAPIReosurce.mode"
import { VersionGameIndex } from "../versionGameIndex.model"
import { PokemonAbility } from "./pokemonAbility.model"
import { PokemonHeldItem } from "./pokemonHeldItem.model"
import { PokemonMove } from "./pokemonMove.model"
import { PokemonSprites } from "./pokemonSprites.model"
import { PokemonStat } from "./pokemonStat.model"
import { PokemonType } from "./pokemonType.model"
import { PokemonTypePast } from "./pokemonTypePast.model"

export interface Pokemon {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: PokemonAbility[]
  forms: NamedApiResource
  game_indices: VersionGameIndex[]
  held_items: PokemonHeldItem[]
  location_area_encounters: string
  moves: PokemonMove[]
  past_types: PokemonTypePast[]
  sprites: PokemonSprites
  species: NamedApiResource
  stats: PokemonStat[]
  types: PokemonType[]
}
