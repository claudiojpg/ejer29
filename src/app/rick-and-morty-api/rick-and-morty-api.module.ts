import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RickAndMortyApiPageRoutingModule } from './rick-and-morty-api-routing.module';

import { RickAndMortyApiPage } from './rick-and-morty-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RickAndMortyApiPageRoutingModule
  ],
  declarations: [RickAndMortyApiPage]
})
export class RickAndMortyApiPageModule {}
