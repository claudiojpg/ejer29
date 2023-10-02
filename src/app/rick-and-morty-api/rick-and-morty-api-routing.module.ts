import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RickAndMortyApiPage } from './rick-and-morty-api.page';

const routes: Routes = [
  {
    path: '',
    component: RickAndMortyApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RickAndMortyApiPageRoutingModule {}
