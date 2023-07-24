import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

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

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
    updatedAt: Date;


}
