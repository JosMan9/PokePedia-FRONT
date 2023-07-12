import { APIResource } from "./apiReosurce.model";
import { NamedApiResource } from "./namedAPIReosurce.mode";

export interface MachineVersionDetail {
  machine: APIResource
  version_group: NamedApiResource
}
