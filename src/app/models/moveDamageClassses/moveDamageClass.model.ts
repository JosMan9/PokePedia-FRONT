import { Description } from "../description.model"
import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface MoveDamageClass {
  id: number
  name: string
  descriptions: Description[]
  moves: NamedApiResource[]
  names: Name[]
}
