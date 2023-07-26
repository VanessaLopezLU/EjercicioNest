import { Entity,Column,PrimaryColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Estadoequipo {

    @PrimaryGeneratedColumn()
    id_estado:number;

    @Column()
    estado:string;

}