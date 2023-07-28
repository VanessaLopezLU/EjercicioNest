import { Entity,Column,PrimaryColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class tipoEquipo {

    @PrimaryGeneratedColumn()
    id_tipo:number;

    @Column()
    tipo:string;
   

}