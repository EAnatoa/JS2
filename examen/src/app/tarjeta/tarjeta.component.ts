import { Component, OnInit } from '@angular/core';
import {ServicioMaestroService} from "../servicio-maestro/servicio-maestro.service";

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  tarjeta = [];

  constructor(private data: ServicioMaestroService) { }

  ngOnInit() {

    this.data.mensajeActual2.subscribe(mensaje => this.tarjeta = mensaje)

  }

  cambiarBolean(estado) {

    if(estado==true){
      return "Si"
    }else{
      return "No"
    }

  }

}
