import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Equipo } from 'src/equipo/entities/Equipo.entity';
import { Prestamo } from 'src/prestamos/entities/prestamos.entity';

export class CreateDetallePrestamoDto {

    constructor(id_prestamo,serial,fecha_prestamo,fecha_devolucion){
        this.id_prestamo=id_prestamo;
        this.id_equipo=serial;
        this.fecha_prestamo=fecha_prestamo;
        this.fecha_devolucion=fecha_devolucion

    }

    @IsInt()
    @IsNotEmpty()
    id_prestamo: Prestamo;


    @IsInt()
    @IsNotEmpty() 
    id_equipo: Equipo;

    @IsDate()
    @IsNotEmpty()
    fecha_prestamo : Date;

    @IsDate()
    @IsNotEmpty()
    fecha_devolucion : Date;
}

