import { Prestamo } from "src/prestamos/entities/prestamos.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Novedade{
    @PrimaryGeneratedColumn()
    id_novedades: number;
    
    @ManyToOne(()=>Prestamo,prestamo=>prestamo.novedades)
    @JoinColumn({name:'id_prestamo'})
    prestamo:Prestamo[];


}
