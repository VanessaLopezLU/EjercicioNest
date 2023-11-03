import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prestamo } from './entities/prestamos.entity';
import { Repository } from 'typeorm';
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
        @Inject(EquipoService) private equipoService:EquipoService,
        @Inject(DetalleprestamoService) private detalleService:DetalleprestamoService,
        @InjectRepository(Prestamo)
        private PrestamoTabla: Repository<Prestamo>,
        @InjectRepository(DetallePrestamo) private detalleprestamoTabla: Repository<DetallePrestamo>
    ) { }
    
    async crearprestamo(prestamo:any) {
        var r= await this.PrestamoTabla.insert(prestamo);
        var prestar=[];
        for(var data of prestamo.detalleprestamo){
            
           let equipo= await this.equipoService.obtenerBuenos(data.id_tipo,1)
           let r2;
           var contador=0;
           for(let d of equipo){
            if (contador<=data.cantidad){
                r2=await this.detalleService.obtener(d.serial,prestamo.fecha_prestamo,prestamo.fecha_devolucion);
                if(r2.length ==0){
                    prestar.push(d);
                    contador++;
                }
            }else{
                break;
            }  
           }
          }
          

          var id=r.identifiers[0].id;
          if(prestar.length==0){
            this.eliminarPrestamo(id);
            return "vacio";
          }
          for (let data of prestar){
            let detalleprestamo= new CreateDetallePrestamoDto(id,data.id,prestamo.fecha_prestamo,prestamo.fecha_devolucion)
             var r=await this.detalleprestamoTabla.insert(detalleprestamo);
          }
          if(contador<data.cantidad){
            let numero=contador;
            return ({numero,id});
        }else{
            return r;
        }  

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
