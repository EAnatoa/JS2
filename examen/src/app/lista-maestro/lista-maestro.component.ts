import {Component, OnInit, Input} from '@angular/core';
import {ServicioMaestroService} from "../servicio-maestro/servicio-maestro.service";


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-maestro.component.html',
  styleUrls: ['./lista-maestro.component.css']
})
export class ListaMaestroComponent implements OnInit {

  mensaje = [];

  maestroTarjeta = [];

  constructor(private data: ServicioMaestroService
  ) {
  }

  ngOnInit() {

    this.data.mensajeActual.subscribe(mensaje => this.mensaje = mensaje)

  }

  mandarDatos(indice) {

    this.maestroTarjeta = [];
    this.maestroTarjeta.push(this.mensaje[indice])
    this.data.cambiarMensaje2(this.maestroTarjeta)
    this.mostrarElementos()
    /*    console.log(this.alumnoTarjeta)*/
  }

  mostrarElementos() {

    var mostrarFormDetalle = <HTMLFormElement>document.getElementById('formDetalle');
    mostrarFormDetalle.style.display = "block";

    var mostrarBotonLimpiarDetalle = <HTMLFormElement>document.getElementById('botonLimpiarDetalle');
    mostrarBotonLimpiarDetalle.style.display = "block";

    var mostrarTarjeta = <HTMLFormElement>document.getElementById('tarjeta');
    mostrarTarjeta.style.display = "block";

  }


}
