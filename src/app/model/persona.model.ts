
export class Persona{
    id?: Number;
    nombre: string;
    apellido: string;
    img: string;

    constructor(nombre:string,apellido:string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}