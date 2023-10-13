import {  IsArray, IsDate, IsDateString, IsInt, IsNotEmpty, IsString,  } from "class-validator";

export class CreatePrestamoDto{

    @IsDateString()
    @IsNotEmpty()
    fecha_prestamo: string;

    @IsDateString()
    @IsNotEmpty()
    fecha_devolucion: string;

   /* @IsInt()
    @IsNotEmpty()
    cantidad: number; */

    @IsInt()
    @IsNotEmpty()
    cedula: number;

    @IsInt()
    @IsNotEmpty()
    idestado :number;
    
    @IsArray()
    @IsNotEmpty()
    detalleprestamo :[

    ];
}     