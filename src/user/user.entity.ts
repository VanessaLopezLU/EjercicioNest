import { Roles } from 'src/roles/entities/Roles.entity';
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

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

    @Column()
    Telefone: number;

    @Column()
    Usuario: string;

    @Column()
    Contraseña: string;

    
    @ManyToOne(type => Roles, roles => roles.user)
    @JoinColumn({ name: 'Rol_id'})
    roles: Roles[];


}
