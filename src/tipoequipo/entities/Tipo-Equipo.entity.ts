import { Equipo } from "src/equipo/entities/Equipo.entity";
import { Entity,Column,PrimaryColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class TipoEquipo {
    

    @PrimaryGeneratedColumn()
    id_tipo:number;

    @Column()
    tipo:string;
    
    @OneToMany(() => Equipo,(equipo)  => equipo.id_tipo)
    equipo: Equipo[];
   

}