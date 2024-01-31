import { Move } from "../moves/move.model"
import { Name } from "../name.mode"

export interface MoveAilment {
  id: number
  name: string
  moves: Move[]
  names: Name[]
}
