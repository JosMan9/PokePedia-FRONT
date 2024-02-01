import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponentComponent } from './pokemon-component/pokemon-component.component';
import { PokemonService } from './services/pokemonService.service';
import { HttpClientModule } from '@angular/common/http';
import { BarraTituloComponent } from './barra-titulo/barra-titulo.component';
import { BayasComponent } from './bayas/bayas.component';
import { ContestComponent } from './contest/contest.component';
import { EncuentrosComponent } from './encuentros/encuentros.component';
import { EvolucionesComponent } from './evoluciones/evoluciones.component';
import { GeneracionesComponent } from './generaciones/generaciones.component';
import { PokedexesComponent } from './pokedexes/pokedexes.component';
import { VersionGroupsComponent } from './version-groups/version-groups.component';
import { ItemsComponent } from './items/items.component';
import { ItemCategoriesComponent } from './item-categories/item-categories.component';
import { ItemEffectsComponent } from './item-effects/item-effects.component';
import { PocketsComponent } from './pockets/pockets.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationAreasComponent } from './location-areas/location-areas.component';
import { ParqueCompiComponent } from './parque-compi/parque-compi.component';
import { RegionComponent } from './region/region.component';
import { MachineComponent } from './machine/machine.component';
import { MovesComponent } from './moves/moves.component';
import { MoveAilmentComponent } from './move-ailment/move-ailment.component';
import { BattleStyleComponent } from './battle-style/battle-style.component';
import { MoveCategoryComponent } from './move-category/move-category.component';
import { MoveDamageClassComponent } from './move-damage-class/move-damage-class.component';
import { MoveLearnMethodsComponent } from './move-learn-methods/move-learn-methods.component';
import { MoveTargetComponent } from './move-target/move-target.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { EggGroupsComponent } from './egg-groups/egg-groups.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponentComponent,
    BarraTituloComponent,
    BayasComponent,
    ContestComponent,
    EncuentrosComponent,
    EvolucionesComponent,
    GeneracionesComponent,
    PokedexesComponent,
    VersionGroupsComponent,
    ItemsComponent,
    ItemCategoriesComponent,
    ItemEffectsComponent,
    PocketsComponent,
    LocationsComponent,
    LocationAreasComponent,
    ParqueCompiComponent,
    RegionComponent,
    MachineComponent,
    MovesComponent,
    MoveAilmentComponent,
    BattleStyleComponent,
    MoveCategoryComponent,
    MoveDamageClassComponent,
    MoveLearnMethodsComponent,
    MoveTargetComponent,
    AbilitiesComponent,
    EggGroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
