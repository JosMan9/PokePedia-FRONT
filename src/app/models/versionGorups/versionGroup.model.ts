import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface VersionGroup {
  id: number
  name: string
  order: number
  generarion: NamedApiResource
  move_learn_methods: NamedApiResource[]
  pokedexes: NamedApiResource[]
  regions: NamedApiResource[]
  versions: NamedApiResource[]
}
