
import { DetallePrestamo } from "src/detalleprestamo/entities/detalleprestamo.entity";
import { EstadoPrestamo } from "src/estadoprestamo/entities/estadoprestamo.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class  Prestamo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha_prestamo: Date;

    @Column()
    fecha_devolucion: Date;

    /*@Column()
    cantidad: number;*/


    @ManyToOne(() => User, (user) => user.prestamo)
    @JoinColumn({ name: 'cedula'})
    user: User[];

    @ManyToOne(()=> EstadoPrestamo, estadoprestamo => estadoprestamo.prestamo)
    @JoinColumn({name: 'id_estado'})
    id_estado: EstadoPrestamo[];

    /*@OneToMany(()=>Novedad,(novedad)=>novedad.id)
    novedades:Novedad[];*/

    /*@ManyToOne(()=> Equipo, equipo => equipo.prestamo)
    @JoinColumn({name: 'id_equipo'})
    id_equipo: Equipo[];*/

    @OneToMany(()=>DetallePrestamo,(detalleprestamo)=>detalleprestamo.prestamo)
    detalleprestamo :DetallePrestamo; 


   




    


}