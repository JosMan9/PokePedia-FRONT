import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"
import { ContestName } from "./contestName.model"

export interface ContestType {
  id: number
  name: string
  berry_flavor: NamedApiResource
  names: ContestName[]
}
