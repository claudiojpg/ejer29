import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-rick-and-morty-api',
  templateUrl: './rick-and-morty-api.page.html',
  styleUrls: ['./rick-and-morty-api.page.scss'],
})
export class RickAndMortyApiPage implements OnInit {
  datos: any;
  personajes: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.obtenerPersonajes().subscribe(response => {
      this.personajes = response.results;
    });
  }
}