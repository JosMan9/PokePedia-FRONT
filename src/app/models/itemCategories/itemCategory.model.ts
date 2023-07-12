import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface ItemCategory {
  id: number
  name: string
  items: NamedApiResource
  names: Name[]
  pocket: NamedApiResource
}
