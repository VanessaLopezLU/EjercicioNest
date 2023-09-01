import { Prestamo } from "src/prestamos/entities/prestamos.entity";
import { Entity,Column,PrimaryColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";

@Entity()
export class Estadoprestamo {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    estado:string;


    @OneToMany(()=>Prestamo,(prestamo)=>prestamo.estadoprestamo)
    prestamo:Prestamo[];

}
