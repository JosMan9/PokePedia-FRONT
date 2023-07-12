import { Name } from "../name.mode"
import { NamedApiResource } from '../namedAPIReosurce.mode';
import { GenerationGameIndex } from '../generationGameIndex.model';

export interface Location {
  id: number
  name: string
  region: NamedApiResource
  names: Name[]
  game_indices: GenerationGameIndex[]
  areas: NamedApiResource[]
}
