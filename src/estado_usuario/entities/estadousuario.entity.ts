import {Entity,Column,PrimaryColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EstadoUsuario{
  @PrimaryGeneratedColumn()
  id:number;
  

  @Column()
  estadousuario: string;

}