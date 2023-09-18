import {  IsDate, IsInt, IsNotEmpty, IsString,  } from "class-validator";

export class CreatePrestamoDto{
   
   

    @IsDate()
    @IsNotEmpty()
    fecha_prestamo: Date;

    @IsDate()
    @IsNotEmpty()
    fecha_devolucion: Date;

    @IsInt()
    @IsNotEmpty()
    cantidad: number; 

    @IsInt()
    @IsNotEmpty()
    cedula: number;

    @IsInt()
    @IsNotEmpty()
    id_estadoprestamo:number;
    
    @IsInt()
    @IsNotEmpty()
    equipos : number[];
}