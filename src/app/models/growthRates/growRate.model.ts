import { Description } from "../description.model"
import { NamedApiResource } from "../namedAPIReosurce.mode"
import { GrowthRateExperienceLevel } from "./growthRateExperienceLevel.model"

export interface GrowthRate {
  id: number
  name: string
  formula: string
  descriptions: Description[]
  levels: GrowthRateExperienceLevel[]
  pokemon_species: NamedApiResource[]
}
