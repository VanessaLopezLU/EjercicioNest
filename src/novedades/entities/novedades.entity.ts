import { Prestamo } from "src/prestamos/entities/prestamos.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Novedad {
    @PrimaryGeneratedColumn()
    id: number;
    
   
    @Column()
    descripcion: string;

    @Column()
    fecha_novedad: Date;

    @Column()
    tipo_novedad: string;
    @Column()
    estado_novedad: string;

   /* @ManyToOne(()=>Prestamo,prestamo=>prestamo.novedades)
    @JoinColumn({name:'id_prestamo'})
    prestamo:Prestamo[];*/





}
