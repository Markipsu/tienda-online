import { User } from "../signup/user";


export class Producto{
    id: number=0;
    nombre: string="";
    imagen:string="";
    descripcion:string="";
    precio:number=0;
    vendedor:User;

}