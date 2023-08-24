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

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponentComponent,
    BarraTituloComponent,
    BayasComponent,
    ContestComponent,
    EncuentrosComponent,
    EvolucionesComponent
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
