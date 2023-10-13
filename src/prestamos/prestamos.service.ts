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
    constructor(
        @Inject(EquipoService) private equipoService:EquipoService,
        @Inject(DetalleprestamoService) private detalleService:DetalleprestamoService,
        @InjectRepository(Prestamo)
        private PrestamoTabla: Repository<Prestamo>,
        @InjectRepository(DetallePrestamo) private detalleprestamoTabla: Repository<DetallePrestamo>
    ) { }
    
    async crearprestamo(prestamo:any) {
        var r= await this.PrestamoTabla.insert(prestamo);
       /* var prestar=[];
        for(let data of prestamo.detalleprestamo){
            
           let equipo= await this.equipoService.obtenerBuenos(data.id_tipo,1)
           let r2;
           let contador=1;
           for(let d of equipo){
            if (contador<=data.cantidad){
                r2=await this.detalleService.obtener(d.id,prestamo.fecha_prestamo,prestamo.fecha_devolucion);
                if(r2.length ==0){
                    prestar.push(d);
                    contador++;
                }
            }else{
                break;
            }

           
            
           }
          }
          let id=r.identifiers[0].id;
          for (let data of prestar){
            let detalleprestamo= new CreateDetallePrestamoDto(id,data.id,prestamo.fecha_prestamo,prestamo.fecha_devolucion)
             var r=await this.detalleprestamoTabla.insert(detalleprestamo);
          }

        return r;
        */

    }
    async ObtenerPrestamo(){
        return await this.PrestamoTabla.find();
    }
  
    async EliminarPrestamo(id:number){
        return await this.PrestamoTabla.delete({id:id});
    }
    /*async ActualizarPrestamo(Prestamoactualizar: UpdatePrestamoDto){
        return await this.PrestamoTabla.update(Prestamoactualizar.id,Prestamoactualizar)
    }*/
}
