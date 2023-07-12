import { Name } from "../name.mode"
import { NatuePokeAthlonStatAffectSets } from "./naturePokeathlonStatAffetSets.model"

export interface PokeAthlonStat {
  id: number
  name: string
  names: Name[]
  affecting_natures: NatuePokeAthlonStatAffectSets
}
