import { Component,OnInit } from '@angular/core';
import { MensajeService } from '../mensaje.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public mensajeactual: string = '';
  public mensajeingresado: string = '';
  datos: any;

  constructor(
    private mensajeService: MensajeService,
    private apiService: ApiService
    ) { }

  sendMessage() {
    this.mensajeService.setMensaje(this.mensajeingresado);
    this.mensajeactual = this.mensajeService.getMensaje();
  }

  limpiarMensaje() {
    this.mensajeingresado = '';
    this.mensajeactual = '';
}
personajes: any;

ngOnInit() {
  this.apiService.obtenerPersonajes().subscribe(response => {
    this.personajes = response.results;
  });
}

}







