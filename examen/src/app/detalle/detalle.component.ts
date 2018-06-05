import {Component, OnInit} from '@angular/core';
import {ServicioMaestroService} from "../servicio-maestro/servicio-maestro.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  formDetalle: FormGroup

  arregloDetalle = []

  arregloTabla = []

  checked: boolean = false

  constructor(private data: ServicioMaestroService) {

  }

  ngOnInit() {

    this.data.mensajeActual2.subscribe(mensaje => this.arregloDetalle = mensaje)

/*    this.arregloTabla = this.arregloDetalle*/

    this.createForm()

  }

  private createForm() {
    this.formDetalle = new FormGroup({
      nombrePokemon: new FormControl(''),
      numeroPokemon: new FormControl(''),
      poderUno: new FormControl(''),
      poderDos: new FormControl(''),
      fechaCaptura: new FormControl(''),
      nivel: new FormControl(''),
      maestroID: new FormControl('')
    });
  }

  agregarDatos(formData) {

    this.arregloDetalle.push(
      {
        'nombre': this.arregloDetalle[0].nombre,
        'apellido': this.arregloDetalle[0].apellido,
        'fechaNacimiento': this.arregloDetalle[0].fechaNacimiento,
        'numeroMedallas': this.arregloDetalle[0].numeroMedallas,
        'campeon': this.arregloDetalle[0].campeon,
        'detalle': this.arregloDetalle[0].detalle
      })

    this.arregloDetalle[0].detalle.push(
      {
        'nombrePokemon': formData.value.nombrePokemon,
        'numeroPokemon': formData.value.numeroPokemon,
        'poderUno': formData.value.poderUno,
        'poderDos': formData.value.poderDos,
        'fechaCaptura': formData.value.fechaCaptura,
        'nivel': formData.value.nivel,
        'maestroID': formData.value.maestroID
      }
    )

    this.arregloDetalle.splice(0, 1)

    this.arregloTabla.push(this.arregloDetalle)

/*    this.arregloDetalle = [] //Solucion*/

    this.mandarDatos()

    this.resetForm()
  }

  mandarDatos() {

    console.log(this.arregloTabla)

    this.data.cambiarMensaje3(this.arregloTabla)

    this.arregloTabla = [] //Aquiiiiii

    this.mostrarTablaDetalle()

  }

  mostrarTablaDetalle() {

    var mostrarTabla = <HTMLFormElement>document.getElementById('tablaDetalle');
    mostrarTabla.style.display = "block";

  }

  resetForm() {

    var resetForm = <HTMLFormElement>document.getElementById('formDetalle');
    resetForm.reset();
  }


}
