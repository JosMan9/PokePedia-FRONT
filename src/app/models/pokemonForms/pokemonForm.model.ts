import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"
import { PokemonFormType } from "../pokemon/pokemonFormType.model"
import { PokemonFormSprites } from "./pokemonFormSprites.model"

export interface PokemonForm {
  id: number
  name: string
  order: number
  form_order: number
  is_default: boolean
  is_battle_only: boolean
  is_mega: boolean
  form_name: string
  pokemon: NamedApiResource
  types: PokemonFormType[]
  sprites: PokemonFormSprites
  version_group: NamedApiResource
  names: Name[]
  form_names: Name[]
}
