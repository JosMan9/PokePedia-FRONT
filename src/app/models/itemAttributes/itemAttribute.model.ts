import { Description } from "../description.model"
import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface ItemAttribute {
  id: number
  name: string
  items: NamedApiResource[]
  names: Name[]
  descriptions: Description[]
}
