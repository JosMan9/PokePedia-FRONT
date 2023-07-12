import { GenerationGameIndex } from "../generationGameIndex.model"
import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"
import { TypePokemon } from "./typePokemon.model"
import { TypeRelations } from "./typeRelations.model"
import { TypeRelationsPast } from "./typeRelationsPast.model"

export interface Type {
  id: number
  name: string
  damage_relations: TypeRelations
  past_damageRelations: TypeRelationsPast[]
  game_indices: GenerationGameIndex[]
  generation: NamedApiResource
  move_damage_class: NamedApiResource
  names: Name[]
  pokemon: TypePokemon[]
  moves: NamedApiResource[]
}
