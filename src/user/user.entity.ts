import { Prestamo } from 'src/prestamos/entities/prestamos.entity';
import { Roles } from 'src/roles/entities/Roles.entity';
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class User {

    @PrimaryColumn()
    Cedula: number;

    @Column()
    Nombre: string;

    @Column()
    Apellido: string;

    @Column()
    Correo: string;

    @Column({type: 'bigint'})
    Telefono: number;

    @Column()
    Usuario: string;

    @Column()
    Contrasena: string;

    
    @ManyToOne(type => Roles, roles => roles.user)
    @JoinColumn({ name: 'id_rol'})
    roles: Roles[];


    @OneToMany(type =>  Prestamo, prestamos => prestamos.user)
    prestamos: Prestamo[]; 
   



}
