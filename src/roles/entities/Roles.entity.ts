import { User } from "src/user/user.entity";
import { Entity,Column,PrimaryColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class Roles {

    @PrimaryGeneratedColumn()
    id_rol:number;

    @Column()
    descripcion:string;
    
    @OneToMany(type => User, user => user.roles)
    user: User[]; 
   
}