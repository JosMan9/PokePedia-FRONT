import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface ItemPocket {
  id: number
  name: string
  categories: NamedApiResource[]
  names: Name[]
}
