import { Entity,Column,PrimaryColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Roles {

    @PrimaryGeneratedColumn()
    id_rol:number;

    @Column()
    descripcion:string;
   

}