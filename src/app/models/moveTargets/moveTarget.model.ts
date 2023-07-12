import { Description } from "../description.model"
import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface MoveTarget {
  id: number
  name: string
  descriptions: Description[]
  moves: NamedApiResource[]
  names: Name[]
}
