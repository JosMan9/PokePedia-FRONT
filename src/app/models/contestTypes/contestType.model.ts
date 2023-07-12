import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface ContestType {
  id: number
  name: string
  berry_flavor: NamedApiResource
  names: Name[]
}
