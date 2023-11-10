import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prestamo } from './entities/prestamos.entity';
import { In, Repository } from 'typeorm';
import { EquipoService } from 'src/equipo/equipo.service';
import { DetalleprestamoService } from 'src/detalleprestamo/detalleprestamo.service';
import { Equipo } from 'src/equipo/entities/Equipo.entity';
import { DetallePrestamo } from 'src/detalleprestamo/entities/detalleprestamo.entity';
import { CreateDetallePrestamoDto } from 'src/detalleprestamo/dto/create-detalleprestamo.dto';

@Injectable()
export class PrestamosService {
    ObtenerPrestamo() {
        throw new Error('Method not implemented.');
    }
    constructor(
        @Inject(EquipoService) private equipoService: EquipoService,
        @Inject(DetalleprestamoService) private detalleService: DetalleprestamoService,
        @InjectRepository(Prestamo)
        private PrestamoTabla: Repository<Prestamo>,
        @InjectRepository(DetallePrestamo) private detalleprestamoTabla: Repository<DetallePrestamo>
    ) { }

    //Codigo de aly
    async crearprestamo(prestamo: any) {
        var r = await this.PrestamoTabla.insert(prestamo);
        var prestar = [];
        for (var data of prestamo.detalleprestamo) {

            let equipo = await this.equipoService.obtenerBuenos(data.id_tipo, 1) // arreglo de equipos buenos
            let r2;
            var contador = 1;
            for (let d of equipo) {
                if (contador <= parseInt(data.cantidad)) {
                    r2 = await this.detalleService.obtener(d.serial, prestamo.fecha_prestamo, prestamo.fecha_devolucion);
                    if (r2.length == 0) {
                        prestar.push(d);
                        contador++;
                    }
                } else {
                    break;
                }
            }
        }


        var id = r.identifiers[0].id;
        if (prestar.length == 0) {
            this.eliminarPrestamo(id);
            return "vacio";
        }
        for (let data of prestar) {
            let detalleprestamo = new CreateDetallePrestamoDto(id, data.id, prestamo.fecha_prestamo, prestamo.fecha_devolucion)
            var r = await this.detalleprestamoTabla.insert(detalleprestamo);
        }
        if (contador < data.cantidad) {
            let numero = contador;
            return ({ numero, id });
        } else {
            return r;
        }

    }
    // Codigo de Vanessa
    async crearPrestamo(prestamo: any) {
        try {
            let equiposPrestar = [];
            let contador: number = 0;
            for (let equipo of prestamo.detalleprestamo) {
                const equiposBuenos = await this.equipoService.obtenerBuenos(equipo.id_tipo, 1);
                contador = 1;
                let responsePrestamo: any;
                for (let equipoB of equiposBuenos) {
                    if (contador <= parseInt(equipo.cantidad)) {
                       responsePrestamo = await this.detalleService.equipoOcupado({
                        id: equipoB.id, 
                        fecha_prestamo: prestamo.fecha_prestamo,
                        fecha_devolucion: prestamo.fecha_devolucion
                       });
                       console.log(responsePrestamo)
                        if (responsePrestamo.length == 0) {
                            equiposPrestar.push(equipoB);
                            contador++;
                        }
                    } else {
                        break;
                    }
                }
            }
            if (equiposPrestar.length == 0) {
                return {
                    respuesta: "No hay ningun equipo disponible"
                }; // si entra aqui el codigo para
            }
            const responsePrestamo = await this.PrestamoTabla.insert(prestamo);
            const idPrestamo: number = responsePrestamo.identifiers[0].id;
            // Prestamos
            let respEquiposPrestados = [];
            for (let equipo of equiposPrestar) {
                let detalleprestamo = new CreateDetallePrestamoDto(idPrestamo, equipo.id, prestamo.fecha_prestamo, prestamo.fecha_devolucion)
                 respEquiposPrestados.push(await this.detalleprestamoTabla.insert(detalleprestamo));
            }
            const idEquiposDetalle = respEquiposPrestados.map((equipoPrestado: any) => {
                return equipoPrestado.identifiers[0].id;
            })
    
            //Devuelvo todos los equipos prestados 
            const equipos =  await this.detalleprestamoTabla.find({
                where: {
                    id: In(idEquiposDetalle)
                },
                relations: {
                    equipo: true,
                }
            });
            const respuestaFinal = {
                id: idPrestamo,
                equiposPrestar: equiposPrestar,
                ...equipos
            }
            return {
                respuesta: "Prestado",
                ...respuestaFinal
            };
        } catch(error) {
            console.log(error);
        }
    }
    async obtener() {
        return await this.PrestamoTabla.find();
    }

    async obtenerPorCedula(cedula) {
        return await this.PrestamoTabla.createQueryBuilder("prestamo")
            .innerJoinAndSelect("prestamo.user", "user")
            .innerJoinAndSelect("prestamo.id_estado", "id_estado")
            .where("user.cedula = :cedula", { cedula: cedula })
            .getMany();
    }


    async eliminarPrestamo(id: number) {
        const prestamoAEliminar = await this.PrestamoTabla.delete(id);
        if (!prestamoAEliminar) {
            throw new Error('El préstamo no existe.');
        }
        return this.PrestamoTabla.delete(id);
    }
}
