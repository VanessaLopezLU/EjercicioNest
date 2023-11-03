import { Injectable } from '@nestjs/common';
import { CreateDetallePrestamoDto } from './dto/create-detalleprestamo.dto';
import { UpdateDetallePrestamoDto } from './dto/update-detalleprestamo.dto';
import { DetallePrestamo } from './entities/detalleprestamo.entity';
import { DataSource, Equal, LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DetalleprestamoService {
  constructor(
    private dataSource: DataSource, @InjectRepository(DetallePrestamo)
    private detalleprestamoTabla: Repository<DetallePrestamo>
    ) { } 
    async crearPrestamo(detalleprestamo: CreateDetallePrestamoDto) {
          return await this.detalleprestamoTabla.insert(detalleprestamo);
  }
 
  async obtener(id_equipo, fecha_prestamo, fecha_devolucion){
    console.log('ob',id_equipo, fecha_prestamo, fecha_devolucion);
   const r=await this.dataSource.getRepository(DetallePrestamo).findBy({
        fecha_prestamo:LessThanOrEqual(fecha_devolucion),
        fecha_devolucion:MoreThanOrEqual(fecha_prestamo),
        equipo:{id:Equal(id_equipo)}
    });
    return r;
}
async obtenerTodo(){
  return await this.detalleprestamoTabla.find({relations:{equipo:true, prestamo:true}});
}
async obtenerPorId(id){
   return await this.detalleprestamoTabla.createQueryBuilder("detalle")
   .innerJoinAndSelect("detalle.equipo", "equipo")
   .where("detalle.prestamo = :id", { id: id })
   .getMany();
}

async eliminarPrestamo(id : number){
  const Eliminar = await this.detalleprestamoTabla.delete(id);
        if(!Eliminar){
            throw await Error('el prestamo no existe');
        }
    return this.detalleprestamoTabla.delete(id);
  
}
}
