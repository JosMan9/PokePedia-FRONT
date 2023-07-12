import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface MoveAliment {
  id: number
  name: string
  moves: NamedApiResource[]
  names: Name[]
}
