import { Effect } from "../effect.model";
import { NamedApiResource } from "../namedAPIReosurce.mode";

export interface AbilityEffectChange {
  effect_entries: Effect[]
  version_group: NamedApiResource
}
