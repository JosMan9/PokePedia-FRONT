import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BayasComponent } from './bayas/bayas.component';
import { ContestComponent } from './contest/contest.component';
import { EncuentrosComponent } from './encuentros/encuentros.component';
import { PokemonComponentComponent } from './pokemon-component/pokemon-component.component';

const routes: Routes = [
  {
    path: '', redirectTo: "/pokemon", pathMatch: 'full'
  },
  {
    path: 'bayas', component: BayasComponent
  },
  {
    path: 'concursos', component: ContestComponent
  },
  {
    path: 'encuentros', component: EncuentrosComponent
  },
  {
    path: 'pokemon', component: PokemonComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
