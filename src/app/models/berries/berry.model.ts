import { Item } from "../item/item.model"
import { NamedApiResource } from "../namedAPIReosurce.mode"
import { BerryFlavorMap } from "./berryFlvorMap.model"

export interface Berry {
  id: number
  name: string
  growth_time: number
  max_harvest: number
  natural_gift_power: number
  size: number
  smoothness: number
  soil_dryness: number
  firmness: NamedApiResource
  flavors: BerryFlavorMap[]
  item: NamedApiResource
  natural_gift_type: NamedApiResource
}
