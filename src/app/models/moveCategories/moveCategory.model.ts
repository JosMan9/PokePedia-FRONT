import { Description } from "../description.model"
import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface MoveCateogory {
  id: number
  name: string
  moves: NamedApiResource[]
  descriptions: Description[]
}
