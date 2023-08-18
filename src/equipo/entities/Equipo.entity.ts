import { EstadoEquipo } from "src/estado-equipo/entities/estado-equipo.entity";
import { TipoEquipo } from "src/tipoequipo/entities/Tipo-Equipo.entity";
import { Entity,Column,PrimaryColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn,ManyToOne, JoinColumn, OneToMany } from "typeorm";

@Entity()
export class Equipo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    serial: string;

    @Column()
    descripcion: string;


    @ManyToOne(() => EstadoEquipo, Estadoequipo => Estadoequipo.equipo)
    @JoinColumn({ name: 'id_estado'})
    id_estado: EstadoEquipo[];

    @ManyToOne(() => TipoEquipo, (tipoequipo) => tipoequipo.equipo)
    @JoinColumn({ name: 'id_tipo'})
    id_tipo: TipoEquipo[];

   


}