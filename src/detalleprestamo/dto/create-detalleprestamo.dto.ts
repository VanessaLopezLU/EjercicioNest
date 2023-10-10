import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateDetallePrestamoDto {
    @IsInt()
    @IsNotEmpty()
    id_prestamo: number;

    @IsInt()
    @IsNotEmpty() 
    id_equipo: number;

    @IsDate()
    @IsNotEmpty()
    fecha_prestamo : Date;

    @IsDate()
    @IsNotEmpty()
    fecha_devolucion : Date;
}

