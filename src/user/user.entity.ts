import { type } from 'os';
import { EstadoUsuario } from 'src/estado_usuario/entities/estadousuario.entity';
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

    
    

    @ManyToOne( type => EstadoUsuario, estadousuario => estadousuario.user)
    @JoinColumn({ name: 'id'})
    id: EstadoUsuario;


    @OneToMany(type =>  Prestamo, prestamos => prestamos.user)
    prestamos: Prestamo[]; 

    @ManyToOne(type => Roles, roles => roles.user)
    @JoinColumn({ name: 'id_rol'})
    id_rol: Roles;
   



}
