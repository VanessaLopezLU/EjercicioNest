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
      let Noexiste = await this.validarQueNoExista(detalleprestamo);
      if (Noexiste) {
          return await this.detalleprestamoTabla.insert(detalleprestamo)
      }
      return 'Ya Existe'
  }
 
  async obtener(id_equipo, fecha_prestamo, fecha_devolucion){
    console.log('ob',id_equipo, fecha_prestamo, fecha_devolucion);
   const r=await this.dataSource.getRepository(DetallePrestamo).findBy({
        fecha_prestamo:MoreThanOrEqual(fecha_prestamo),
        fecha_devolucion:LessThanOrEqual(fecha_devolucion),
        equipo:{id:Equal(id_equipo)}
    });
    return r;
    console.log(r);
    
}
async validarQueNoExista(detalleprestamo) {
  return await this.detalleprestamoTabla.find({where : {fecha_prestamo : detalleprestamo.fecha_prestamo}}).then((resp) => {
    if (resp == null) {
      return true;
    }
    return false;
  });
}
async eliminarPrestamo(id : number){
   
    return this.detalleprestamoTabla.delete({id : id})
}
async actualizarPrestamo(detalleprestamoActualizar){
  return await this.detalleprestamoTabla.update(detalleprestamoActualizar.id,detalleprestamoActualizar);
}
  
}
