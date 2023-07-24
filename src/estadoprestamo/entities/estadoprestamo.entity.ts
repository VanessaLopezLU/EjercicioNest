import { Entity,Column,PrimaryColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Estadoprestamo {

    @PrimaryGeneratedColumn()
    id_estadoprestamo:number;

    @Column()
    estado:string;

}
