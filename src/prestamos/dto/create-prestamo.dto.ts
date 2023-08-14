import {  IsDateString, IsInt, IsNotEmpty, IsString,  } from "class-validator";

export class CreatePrestamoDto{
   
    @IsString()
    @IsNotEmpty()
    ambiente: string;

    @IsDateString()
    @IsNotEmpty()
    fecha_prestamo: string;

    @IsDateString()
    @IsNotEmpty()
    fecha_devolucion: string;

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