import { ContestType } from "../contestTypes/contestType.model"
import { Name } from "../name.mode"
import { FlavorBerryMap } from "./flavorberrymap.model"

export interface BerryFlavor {
  id: number
  name: string
  berries: FlavorBerryMap
  contest_type: ContestType
  names: Name[]
}
