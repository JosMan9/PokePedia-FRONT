import { NamedApiResource } from './namedAPIReosurce.mode';
export interface NamedAPIResourceList {
  count: number
  next: string
  previous: string
  results: NamedApiResource[]
}
