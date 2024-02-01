import { Description } from "../description.model"
import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"
import { VersionGroup } from "../versionGorups/versionGroup.model"

export interface MoveLearnMethod {
  id: number
  name: string
  descriptions: Description[]
  names: Name[]
  version_groups: VersionGroup[]
}
