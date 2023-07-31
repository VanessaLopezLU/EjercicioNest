
import { Equipo } from "src/equipo/entities/Equipo.entity";
import { Entity,Column,PrimaryColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class EstadoEquipo {

    @PrimaryGeneratedColumn()
    id_estado:number;

    @Column()
    estado:string;

    @OneToMany(type => Equipo,equipo  => equipo.estadoequipo)
    equipo: Equipo[];

}