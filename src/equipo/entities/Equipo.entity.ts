import { EstadoEquipo } from "src/estado-equipo/entities/estado-equipo.entity";
import { TipoEquipo } from "src/tipoequipo/entities/Tipo-Equipo.entity";
import { Entity,Column,PrimaryColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn,ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class Equipo {

    @PrimaryGeneratedColumn()
    id_equipo: number;

    @Column()
    serial: string;

    @Column()
    descripcion: string;


    @ManyToOne(type => EstadoEquipo, Estadoequipo => Estadoequipo.equipo)
    @JoinColumn({ name: 'id_estado'})
    estadoequipo: EstadoEquipo[];

    @ManyToOne(() => TipoEquipo, (tipoequipo) => tipoequipo.equipo)
    @JoinColumn({ name: 'id_tipo'})
    tipoequipo: TipoEquipo[];


}