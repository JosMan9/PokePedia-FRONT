import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface EncounterConditionValue {
  id: number
  name: string
  condition: NamedApiResource
  names: Name[]
}
