import { type } from 'os';
import { EstadoUsuario } from 'src/estado_usuario/entities/estadousuario.entity';
import { Prestamo } from 'src/prestamos/entities/prestamos.entity';
import { Roles } from 'src/roles/entities/Roles.entity';
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class User {

    @PrimaryColumn()
    cedula: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    correo: string;

    @Column({type: 'bigint'})
    telefono: number;

    @Column()
    usuario: string;

    @Column()
    contrasena: string;

    
    

    @ManyToOne( type => EstadoUsuario, estadousuario => estadousuario.user)
    @JoinColumn({ name: 'id'})
    id_estado: EstadoUsuario;


    @OneToMany(type =>  Prestamo, prestamos => prestamos.user)
    prestamos: Prestamo[]; 

    @ManyToOne(type => Roles, roles => roles.user)
    @JoinColumn({ name: 'id_rol'})
    id_rol: Roles;
   



}
