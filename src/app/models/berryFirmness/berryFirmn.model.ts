import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface BerryFirmness {
  id: number
  name: string
  berries: NamedApiResource[]
  names: Name[]
}
