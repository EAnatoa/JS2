import { Component, OnInit, Input } from '@angular/core';
import {ServicioMaestroService} from "../servicio-maestro/servicio-maestro.service";

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  arregloCarrusel = [];


  constructor(private data: ServicioMaestroService) { }


  ngOnInit() {
    this.data.mensajeActual.subscribe(mensaje => this.arregloCarrusel = mensaje)

  }

  escuela(seleccion){

    if(seleccion == 1){

      return "https://pm1.narvii.com/6307/46c1f6514f660679d0d634136f2dfd3aa89925e0_hq.jpg"

    }else{

      return "https://pm1.narvii.com/6307/a8ed611fe49d7384aea1984aa360fca14b861779_hq.jpg"
    }

  }

}
