import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"
import { AwesomeName } from "./awesomeName.model"

export interface PokemonShape {
  id: number
  name: string
  awesome_names: AwesomeName[]
  names: Name[]
  pokemon_especies: NamedApiResource[]
}
