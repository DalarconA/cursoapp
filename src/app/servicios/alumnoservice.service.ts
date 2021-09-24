import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../modelo/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoserviceService {

  ruta_servidor : string = "http://localhost:8080";

  constructor(private http: HttpClient) {

   }

   // Mecanismos asincronos AJAX
   // Observables - mejor REACTIVA - rxjs - APACHE
   // Promesas
   // Observado

   public listar(): Observable<Alumno[]> {

    console.log("Obteniendo lista de todos los alumnos");

    return this.http.get<Alumno[]>(this.ruta_servidor);
    
  }
}
