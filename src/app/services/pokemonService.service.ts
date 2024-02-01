import { Injectable, Version } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Pokemon } from "../models/pokemon/pokemon.model";
import { NamedAPIResourceList } from "../models/namedAPIRlist.model";
import { Berry } from "../models/berries/berry.model";
import { BerryFirmness } from "../models/berryFirmness/berryFirmn.model";
import { BerryFlavor } from "../models/berryFlavors/berryFlavors.model";
import { ContestType } from "../models/contestTypes/contestType.model";
import { ContestEffect } from "../models/contestEffects/contestEffects.model";
import { SuperContestEffects } from "../models/superContestEffects/superContestEffects.model";
import { EncounterMethod } from "../models/encountersMethods/encountersMethods.model";
import { EncounterCondition } from "../models/encounterConditions/encounterCondition.model";
import { EncounterConditionValue } from "../models/encountersConditionValues/encounterConditionValues.model";
import { EvolutionChain } from "../models/evolutionChains/evolutionChain.model";
import { EvolutionTrigger } from "../models/evolutionTriggers/evolutionTrigger.model";
import { Generation } from "../models/generations/generation.model";
import { Pokedex } from "../models/pokedexes/pokedex.mode";
import { VersionGroup } from "../models/versionGorups/versionGroup.model";
import { Item } from "../models/item/item.model";
import { ItemAttribute } from "../models/itemAttributes/itemAttribute.model";
import { ItemCategory } from "../models/itemCategories/itemCategory.model";
import { ItemFlingEffect } from "../models/itemFlingEffects/itemFlingEffect.model";
import { ItemPocket } from "../models/itemPokeckets/itemPocket.model";
import { LocationArea } from "../models/locationAreas/locationArea.model";
import { PalParkArea } from "../models/palParkAreas/palParkArea.model";
import { Region } from "../models/regions/region.model";
import { Machine } from "../models/machines/machine.model";
import { Move } from "../models/moves/move.model";
import { MoveAilment } from "../models/moveAliments/moveAliment.model";
import { MoveBattleStyle } from "../models/moveBattleStyles/moveBattleStyle.model";
import { MoveCateogory } from "../models/moveCategories/moveCategory.model";
import { MoveDamageClass } from "../models/moveDamageClassses/moveDamageClass.model";
import { MoveLearnMethod } from "../models/moveLearnMethods/moveLearnMethos.model";
import { MoveTarget } from "../models/moveTargets/moveTarget.model";
import { Ability } from "../models/abilities/ability.model";
import { Characteristic } from "../models/characteristics/characteristic.model";
import { Gender } from "../models/genders/gender.model";
import { GrowthRate } from '../models/growthRates/growRate.model';
import { Nature } from "../models/natures/nature.model";
import { PokeAthlonStat } from "../models/pokeathlonStats/pokeathlonStat.model";
import { PokemonColor } from "../models/pokemonColors/pokemonColor.model";
import { PokemonForm } from "../models/pokemonForms/pokemonForm.model";
import { PokemonHabitat } from "../models/pokemonHabitats/pokemonHabitat.model";
import { PokemonShape } from "../models/pokemonShapes/pokemonShape.model";
import { PokemonSpecies } from '../models/pokemonSpecies/pokemonSpecies.model';
import { Stat } from '../models/stats/stat.model';
import { Type } from "@angular/compiler";
import { Language } from "../models/language.model";
import { Location } from "../models/locations/location.model";
import { EggGroup } from "../models/egggroups/egggroup.model";

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {

  }

  public URL = "http://localhost:1015"

  /*
  * métodos para las bayas
  */
  getBerries(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/berry`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getBerry(id: string): Observable<Berry> {
    const url = `${this.URL}/berry/${id}`
    return this.http.get<Berry>(url);
  }


  /*
   * Métodos para la firmeza de las bayas
   */

  getBerryFirmnesses(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/berry-firmness`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getBerryFirmness(id: string): Observable<BerryFirmness> {
    const url = `${this.URL}/berry-firmness/${id}`;
    return this.http.get<BerryFirmness>(url);
  }


  /*
   * Métodos para los sabores de las bayas
   */

  getBerryFlavors(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/berry-flavor}`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getBerryFlavor(id: string): Observable<BerryFlavor> {
    const url = `${this.URL}/berry-flavor/${id}`;
    return this.http.get<BerryFlavor>(url);
  }


  /*
  * Métodos para los tipos de concursos
  */

  getContestTypes(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/contest-type`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getContestType(id: string): Observable<ContestType> {
    const url = `${this.URL}/contest-type/${id}`;
    return this.http.get<ContestType>(url);
  }

  /*
  * Métodos para los efectos de los concursos
  */

  getContestEffects(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/contest-effect`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getContestEffect(id: string): Observable<ContestEffect> {
    const url = `${this.URL}/contest-effect/${id}`;
    return this.http.get<ContestEffect>(url);
  }


  /*
  * Métodos para los efectos de los super concursos
  */

  getSuperContestEffects(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/super-contest-effect`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getSuperContestEffectt(id: string): Observable<SuperContestEffects> {
    const url = `${this.URL}/super-contest-effect/${id}`;
    return this.http.get<SuperContestEffects>(url);
  }


  /*
  * Métodos para los métodos de encuentros
  */

  getEncounterMethods(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/encounter-method`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getEncounterMethod(id: string): Observable<EncounterMethod> {
    const url = `${this.URL}/encounter-method/${id}`;
    return this.http.get<EncounterMethod>(url);
  }

  /*
* métodos para las condiciones de los encuentros
*/
  getEncounterConditions(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/encounter-condition`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getEncounterCondition(id: string): Observable<EncounterCondition> {
    const url = `${this.URL}/encounter-condition/${id}`
    return this.http.get<EncounterCondition>(url);
  }


  /*
   * Métodos para los valores de las condiciones de los encuentros
   */

  getEncounterConditionValues(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/encounter-condition-value`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getEncounterConditionValue(id: string): Observable<EncounterConditionValue> {
    const url = `${this.URL}/encounter-condition-value/${id}`;
    return this.http.get<EncounterConditionValue>(url);
  }


  /*
   * Métodos para las cadenas evolutivas
   */

  getEvolutionChains(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/evolution-chain}`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getEvolutionChain(id: string): Observable<EvolutionChain> {
    const url = `${this.URL}/evolution-chain/${id}`;
    return this.http.get<EvolutionChain>(url);
  }


  /*
  * Métodos para los disparadores de evolucion
  */

  getEvolutionTriggers(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/evolution-trigger`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getEvolutionTrigger(id: string): Observable<EvolutionTrigger> {
    const url = `${this.URL}/evolution-trigger/${id}`;
    return this.http.get<EvolutionTrigger>(url);
  }

  /*
  * Métodos para las generaciones
  */

  getGenerations(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/generation`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getGenetarion(id: string): Observable<Generation> {
    const url = `${this.URL}/generation/${id}`;
    return this.http.get<Generation>(url);
  }


  /*
  * Métodos para la pokedex
  */

  getPokedexes(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/pokedex`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getPokedex(id: string): Observable<Pokedex> {
    const url = `${this.URL}/pokedex/${id}`;
    return this.http.get<Pokedex>(url);
  }


  /*
  * Métodos para las versiones
  */

  getVersions(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/version`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getVersion(id: string): Observable<Version> {
    const url = `${this.URL}/version/${id}`;
    return this.http.get<Version>(url);
  }


  /*
  * Métodos para las versiones de grupo
  */

  getVersionGroups(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/version-group`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getVersionGroup(id: string): Observable<VersionGroup> {
    const url = `${this.URL}/version-group/${id}`;
    return this.http.get<VersionGroup>(url);
  }


  /*
  * Métodos para los items
  */

  getItems(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/item`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getItem(id: string): Observable<Item> {
    const url = `${this.URL}/item/${id}`;
    return this.http.get<Item>(url);
  }


  /*
  * Métodos para los atributos de los items
  */

  getItemAttributes(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/item-attribute`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getItemAttribute(id: string): Observable<ItemAttribute> {
    const url = `${this.URL}/item-attribute/${id}`;
    return this.http.get<ItemAttribute>(url);
  }


  /*
  * Métodos para las categorias de los items
  */

  getItemCategories(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/item-category`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getItemCategory(id: string): Observable<ItemCategory> {
    const url = `${this.URL}/item-category/${id}`;
    return this.http.get<ItemCategory>(url);
  }


  /*
  * Métodos para los efectos de lanzamiento de los items
  */

  getItemFlingEffects(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/item-fling-effect`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getItemFliingEffect(id: string): Observable<ItemFlingEffect> {
    const url = `${this.URL}/item-fling-effect/${id}`;
    return this.http.get<ItemFlingEffect>(url);
  }


  /*
  * Métodos para los item pockets
  */

  getItemPockets(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/item-pocket`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getItemPocket(id: string): Observable<ItemPocket> {
    const url = `${this.URL}/item-pocket/${id}`;
    return this.http.get<ItemPocket>(url);
  }


  /*
  * Métodos para las locaciones
  */

  getLocations(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/location`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getLocation(id: string): Observable<Location> {
    const url = `${this.URL}/location/${id}`;
    return this.http.get<Location>(url);
  }


  /*
  * Métodos para las locaciones de las areas
  */

  getLocationAreas(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/location-area`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getLocationArea(id: string): Observable<LocationArea> {
    const url = `${this.URL}/location-area/${id}`;
    return this.http.get<LocationArea>(url);
  }


  /*
  * Métodos para las areas de los parques compis
  */

  getPalParkAreas(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/pal-park-area`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getPalParkArea(id: string): Observable<PalParkArea> {
    const url = `${this.URL}/pal-park-area/${id}`;
    return this.http.get<PalParkArea>(url);
  }


  /*
  * Métodos para las regiones
  */

  getRegions(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/region`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getRegion(id: string): Observable<Region> {
    const url = `${this.URL}/region/${id}`;
    return this.http.get<Region>(url);
  }



  /*
  * Métodos para las MT o HM
  */

  getMachines(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/machine`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getMachine(id: string): Observable<Machine> {
    const url = `${this.URL}/machine/${id}`;
    return this.http.get<Machine>(url);
  }


  /*
  * Métodos para los movimientos
  */

  getMoves(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/move`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getMove(id: string): Observable<Move> {
    const url = `${this.URL}/move/${id}`;
    return this.http.get<Move>(url);
  }


  /*
  * Métodos para los efectos secundarios de los movimientos
  */

  getMoveAilments(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/move-ailment`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getMoveAliment(id: string): Observable<MoveAilment> {
    const url = `${this.URL}/move-ailment/${id}`;
    return this.http.get<MoveAilment>(url);
  }



  /*
  * Métodos para los movimientos de estilos de batalla
  */

  getMoveBattleStyles(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/move-battle-style`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getMoveBattleStyle(id: string): Observable<MoveBattleStyle> {
    const url = `${this.URL}/move-battle-style/${id}`;
    return this.http.get<MoveBattleStyle>(url);
  }


  /*
  * Métodos para las categorias de los movimientos
  */

  getMoveCategories(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/move-category`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getMoveCategory(id: string): Observable<MoveCateogory> {
    const url = `${this.URL}/move-category/${id}`;
    return this.http.get<MoveCateogory>(url);
  }


  /*
  * Métodos para las clases de daño de los movimientos
  */

  getMoveDamageClasses(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/move-damage-class`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getMoveDamageClass(id: string): Observable<MoveDamageClass> {
    const url = `${this.URL}/move-damage-class/${id}`;
    return this.http.get<MoveDamageClass>(url);
  }


  /*
  * Métodos para los metodos de aprendizaje de los movimientos
  */

  getMoveLearnMethods(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/move-learn-method`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getMoveLearnMethod(id: string): Observable<MoveLearnMethod> {
    const url = `${this.URL}/move-learn-method/${id}`;
    return this.http.get<MoveLearnMethod>(url);
  }


  /*
  * Métodos para los objetivos de los movimientos
  */

  getMoveTargets(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/move-target`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getMoveTarget(id: string): Observable<MoveTarget> {
    const url = `${this.URL}/move-target/${id}`;
    return this.http.get<MoveTarget>(url);
  }


  /*
  * Métodos para las habilidades
  */

  getAbilities(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/ability`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getAbility(id: string): Observable<Ability> {
    const url = `${this.URL}/ability/${id}`;
    return this.http.get<Ability>(url);
  }


  /*
  * Métodos para las caracteristicas
  */

  getCharacteristics(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/characteristic`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getCharacteristic(id: string): Observable<Characteristic> {
    const url = `${this.URL}/characteristic/${id}`;
    return this.http.get<Characteristic>(url);
  }


  /*
  * Métodos para los grupos huevo
  */

  getEggGroups(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/egg-group`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getEggGroup(id: string): Observable<EggGroup> {
    const url = `${this.URL}/egg-group/${id}`;
    return this.http.get<EggGroup>(url);
  }


  /*
  * Métodos para los generos
  */

  getGenders(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/gender`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getGender(id: string): Observable<Gender> {
    const url = `${this.URL}/gender/${id}`;
    return this.http.get<Gender>(url);
  }


  /*
  * Métodos para los radios de crecimiento
  */

  getGrowthRates(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/move`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getGrowthRate(id: string): Observable<GrowthRate> {
    const url = `${this.URL}/move/${id}`;
    return this.http.get<GrowthRate>(url);
  }


  /*
  * Métodos para las naturalezas
  */

  getNatures(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/nature`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getNature(id: string): Observable<Nature> {
    const url = `${this.URL}/nature/${id}`;
    return this.http.get<Nature>(url);
  }


  /*
  * Métodos para los stats del pokeathlon
  */

  getPokeathlonStats(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/pokeathlon-stat`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getPokeathlonStat(id: string): Observable<PokeAthlonStat> {
    const url = `${this.URL}/pokeathlon-stat/${id}`;
    return this.http.get<PokeAthlonStat>(url);
  }


  /*
  * Métodos para los pokemon
  */

  getPokemons(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/pokemon`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getPokemon(id: string): Observable<Pokemon> {
    const url = `${this.URL}/pokemon/${id}`;
    return this.http.get<Pokemon>(url);
  }


  /*
  * Métodos para las areas de locaciones de los pokemon
  */

  getPokemonLocationAreas(id: string): Observable<LocationArea> {
    const url = `${this.URL}/pokemon-location-area/${id}`;
    return this.http.get<LocationArea>(url);
  }


  /*
  * Métodos para los colores de los pokemon
  */

  getPokemonColors(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/pokemon-color`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getPokemonColor(id: string): Observable<PokemonColor> {
    const url = `${this.URL}/pokemon-color/${id}`;
    return this.http.get<PokemonColor>(url);
  }


  /*
  * Métodos para las formas de los pokemon
  */

  getPokemonForms(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/pokemon-form`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getPokemonForm(id: string): Observable<PokemonForm> {
    const url = `${this.URL}/pokemon-form/${id}`;
    return this.http.get<PokemonForm>(url);
  }


  /*
  * Métodos para los habitats de los pokemon
  */

  getPokemonHabitats(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/pokemon-habitat`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getPokemonHabitat(id: string): Observable<PokemonHabitat> {
    const url = `${this.URL}/pokemon-habitat/${id}`;
    return this.http.get<PokemonHabitat>(url);
  }


  /*
  * Métodos para las figuras de los pokemon
  */

  getPokemonShapes(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/pokemon-shape`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getPokemonShape(id: string): Observable<PokemonShape> {
    const url = `${this.URL}/pokemon-shape/${id}`;
    return this.http.get<PokemonShape>(url);
  }


  /*
  * Métodos para las especies de pokemon
  */

  getPokemonSpecies(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/pokemon-species`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getPokemonSpecie(id: string): Observable<PokemonSpecies> {
    const url = `${this.URL}/pokemon-species/${id}`;
    return this.http.get<PokemonSpecies>(url);
  }


  /*
  * Métodos para los stat
  */

  getStats(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/stat`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getStat(id: string): Observable<Stat> {
    const url = `${this.URL}/stat/${id}`;
    return this.http.get<Stat>(url);
  }


  /*
  * Métodos para los tipos
  */

  getTypes(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/type`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getType(id: string): Observable<Type> {
    const url = `${this.URL}/type/${id}`;
    return this.http.get<Type>(url);
  }


  /*
  * Métodos para los diferentes lenguajes
  */

  getLanguages(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/language`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getLanguage(id: string): Observable<Language> {
    const url = `${this.URL}/language/${id}`;
    return this.http.get<Language>(url);
  }

}
