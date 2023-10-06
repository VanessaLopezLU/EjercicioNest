import { Prestamo } from "src/prestamos/entities/prestamos.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Novedad {
    @PrimaryGeneratedColumn()
    id: number;
    
   
    @Column()
    descripcion: string;

    @Column()
    fechaNovedad: string;

    @Column()
    tipoNovedad: string;

    @ManyToOne(()=>Prestamo,prestamo=>prestamo.novedades)
    @JoinColumn({name:'id_prestamo'})
    prestamo:Prestamo[];





}
