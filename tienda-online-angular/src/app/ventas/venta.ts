import { Producto } from "../productos/producto";
import { User } from "../signup/user";

export class Venta{
    id:number;
    fechaVenta:string;
    precioTotal:number;
    comprador:User
    productos:Producto[]
}