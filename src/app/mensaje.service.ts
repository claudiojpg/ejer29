import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private mensaje: string = '';

  constructor() { }

  setMensaje(mensaje: string) {
    this.mensaje = mensaje;
  }

  getMensaje(): string {
    return this.mensaje;
  }
}