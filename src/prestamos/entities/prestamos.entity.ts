
import { Equipo } from "src/equipo/entities/Equipo.entity";
import { EstadoPrestamo } from "src/estadoprestamo/entities/estadoprestamo.entity";
import { Novedade  } from "src/novedades/entities/novedades.entity";
import { User } from "src/user/user.entity";
import internal from "stream";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class  Prestamo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ambiente: string;

    @Column()
    fecha_prestamo: Date;

    @Column()
    fecha_devolucion: Date;

    @Column()
    cantidad: number;


    @ManyToOne(() => User, (user) => user.prestamos)
    @JoinColumn({ name: 'cedula'})
    user: User[];

    @ManyToOne(()=> EstadoPrestamo, estadoprestamo => estadoprestamo.prestamo)
    @JoinColumn({name: 'id_estado'})
    estadoprestamo: EstadoPrestamo[];

    @OneToMany(()=>Novedade,(novedades)=>novedades.id)
    novedades:Novedade[];

    @ManyToMany(()=>Equipo)
    @JoinTable({name:'detallePrestamo'})
    equipo:Equipo[];




    


}