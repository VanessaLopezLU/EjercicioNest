
import { Equipo } from "src/equipo/entities/Equipo.entity";
import { Estadoprestamo } from "src/estadoprestamo/entities/estadoprestamo.entity";
import { Novedade  } from "src/novedades/entities/novedades.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class   Prestamo{
    @PrimaryGeneratedColumn()
    id_prestamo: number;

    @Column()
    ambiente: string;

    @Column()
    fecha_prestamo: string;

    @Column()
    fecha_devolucion: string;


    @ManyToOne(() => User, (user) => user.prestamos)
    @JoinColumn({ name: 'cedula'})
    user: User[];

    @ManyToOne(()=> Estadoprestamo, estadoprestamo => estadoprestamo.prestamo)
    @JoinColumn({name: 'id_estado'})
    estadoprestamo: Estadoprestamo[];

    @OneToMany(()=>Novedade,(novedades)=>novedades.id_novedades)
    novedades:Novedade[];

    @ManyToMany(()=>Equipo)
    @JoinTable({name:'detallePrestamo'})
    equipo:Equipo[];




    


}