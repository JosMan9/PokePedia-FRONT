import { APIResource } from "../apiReosurce.model"
import { GenerationGameIndex } from "../generationGameIndex.model"
import { MachineVersionDetail } from "../machineVersionDetail.model"
import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"
import { VerboseEffect } from "../verboseEffect.model"
import { VersionGroupFlavorText } from "../versionGroupFlavorText.model"
import { ItemHolderPokemon } from "./itemHolderPokemon.model"
import { ItemSprites } from "./itemSprites.model"

export interface Item {
  id: number
  name: string
  cost: number
  fling_power: number
  fling_effect: NamedApiResource
  attributes: NamedApiResource[]
  category: NamedApiResource
  effect_entries: VerboseEffect[]
  flavor_text_entries: VersionGroupFlavorText[]
  game_indices: GenerationGameIndex[]
  names: Name[]
  sprites: ItemSprites
  held_by_pokemon: ItemHolderPokemon[]
  baby_trigget_for: APIResource
  machines: MachineVersionDetail[]
}
