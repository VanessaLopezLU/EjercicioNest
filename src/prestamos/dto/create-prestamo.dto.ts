import {  IsDate, IsInt, IsNotEmpty, IsString,  } from "class-validator";

export class CreatePrestamoDto{
   
    @IsString()
    @IsNotEmpty()
    ambiente: string;

    @IsDate()
    @IsNotEmpty()
    fecha_prestamo: Date;

    @IsDate()
    @IsNotEmpty()
    fecha_devolucion: Date;

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