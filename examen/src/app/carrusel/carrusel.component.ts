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



}
