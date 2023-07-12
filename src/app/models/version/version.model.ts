import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface Version {
  id: number
  name: string
  names: Name[]
  version_group: NamedApiResource
}
