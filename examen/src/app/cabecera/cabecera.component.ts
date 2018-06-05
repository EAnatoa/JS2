import {Component, OnInit, Output} from '@angular/core';
import {ServicioMaestroService} from "../servicio-maestro/servicio-maestro.service";
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  formCabecera: FormGroup;

  mensaje = [];

  constructor(private data: ServicioMaestroService) {
  }

  arregloDatos = [];



  medallas = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '+ de 5', viewValue: '+ de 5'},

  ];

  campeon = [
    {value: 'si', viewValue: 'si'},
    {value: 'no', viewValue: 'no'},


  ];

  ngOnInit() {

    this.data.mensajeActual.subscribe(mensaje => this.mensaje = mensaje)

    this.createForm();
  }

  private createForm() {
    this.formCabecera = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      fechaNacimiento: new FormControl(''),
      numeroMedallas: new FormControl(''),
      campeon: new FormControl('')
    });
  }



  agregarDatos(formData) {
    this.arregloDatos.push(
      {
        'nombre': formData.value.nombre,
        'apellido': formData.value.apellido,
        'fechaNacimiento': formData.value.fechaNacimiento,
        'numeroMedallas': formData.value.numeroMedallas,
        'campeon': formData.value.campeon,
        'detalle': []
      })

    console.log(this.arregloDatos)

    this.mandarDatos()

    this.resetForm()

    this.mostrarElementos()

    this.ocultarElementos()

  }

  mandarDatos() {

    this.data.cambiarMensaje(this.arregloDatos)
  }

  resetForm() {

    var resetForm = <HTMLFormElement>document.getElementById('formCabecera');
    resetForm.reset();
  }

  ocultarElementos() {

    var ocultarTablaDetalle = <HTMLFormElement>document.getElementById('tablaDetalle');
    ocultarTablaDetalle.style.display = "none";

  }

  mostrarElementos() {

    var mostrarLabelLista = <HTMLFormElement>document.getElementById('labelListaEstudiantes');
    mostrarLabelLista.style.display = "block";

  }

}
