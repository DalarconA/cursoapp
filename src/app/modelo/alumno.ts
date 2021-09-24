export class Alumno {

    id: number;
    nombre: string;
    apellido: string;
    email: string;
    edad: string;
    creadoEn: string; 

    constructor () {
        
        this.id = 0;
        this.nombre = "";
        this.apellido = "";
        this.email = "";
        this.edad = "";
        this.creadoEn = "";
    }


    /**
     *     //"strictPropertyInitialization": false,
https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc
     */
}
