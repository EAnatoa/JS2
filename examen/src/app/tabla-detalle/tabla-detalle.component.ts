import { Component, OnInit } from '@angular/core';
import {ServicioMaestroService} from "../servicio-maestro/servicio-maestro.service";

@Component({
  selector: 'app-tabla-detalle',
  templateUrl: './tabla-detalle.component.html',
  styleUrls: ['./tabla-detalle.component.css']
})
export class TablaDetalleComponent implements OnInit {

  datosTabla = [];

  datosAuxiliar = [];


  constructor(private data: ServicioMaestroService) { }

  ngOnInit() {



    this.data.mensajeActual3.subscribe(mensaje => this.datosTabla = mensaje)

  }

  imprimir(){

    console.log(this.datosTabla)

  }

  cambiarBolean(estado) {

    if(estado==true){
      return "Si"
    }else{
      return "No"
    }

  }


}
