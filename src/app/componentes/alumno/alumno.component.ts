import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/modelo/alumno';
import { AlumnoserviceService } from 'src/app/servicios/alumnoservice.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
// Componente dedicado a listar alumnos
export class AlumnoComponent implements OnInit {

  listaAlumnos : Alumno[];
  titulo: string = "LISTADO DE ALUMNOS"

  // Inyección de servicios
  constructor(public servicioa: AlumnoserviceService) {

    this.listaAlumnos = [];
   }

  ngOnInit(): void {


    //Me suscribo al observable
    // Y cuando el observable cambie de estado - la lista estará disponible
    // y crea el subscribe
    this.servicioa.listar().subscribe



    // let a1 : Alumno;

    // a1 = new Alumno();
    
    // a1.apellido = "Messi";
    // a1.nombre = "Leo";
    // a1.email = "leo@mail.es";
    // a1.id = 5;
    // a1.edad = "0";
    // a1.creadoEn = "";

    // this.listaAlumnos.push(a1);
    // this.listaAlumnos.push(a1);

  }

}
