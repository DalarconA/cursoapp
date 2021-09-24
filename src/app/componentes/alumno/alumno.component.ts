import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/modelo/alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
// Componente dedicado a listar alumnos
export class AlumnoComponent implements OnInit {

  listaAlumnos : Alumno[];
  titulo: string = "LISTADO DE ALUMNOS"

  constructor() {

    this.listaAlumnos = [];
   }

  ngOnInit(): void {

    let a1 : Alumno;

    a1 = new Alumno();
    
    a1.apellido = "Messi";
    a1.nombre = "Leo";
    a1.email = "leo@mail.es";
    a1.id = 5;
    a1.edad = "0";
    a1.creadoEn = "";

    this.listaAlumnos.push(a1);
    this.listaAlumnos.push(a1);

  }

}
