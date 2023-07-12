import { NamedApiResource } from './namedAPIReosurce.mode';
export interface NamedAPIResourceList<T> {
  count: number
  next: string
  previous: string
  results: NamedApiResource[]
}
