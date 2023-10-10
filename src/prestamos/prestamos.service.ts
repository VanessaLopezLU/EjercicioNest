import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prestamo } from './entities/prestamos.entity';
import { Repository } from 'typeorm';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { EquipoService } from 'src/equipo/equipo.service';
import { DetalleprestamoService } from 'src/detalleprestamo/detalleprestamo.service';
import { Equipo } from 'src/equipo/entities/Equipo.entity';

@Injectable()
export class PrestamosService {
    constructor(
        @Inject(EquipoService) private equipoService:EquipoService,
        @Inject(DetalleprestamoService) private detalleService:DetalleprestamoService,
        @InjectRepository(Prestamo)
        private PrestamoTabla: Repository<Prestamo>,
        @InjectRepository(Equipo) equipoTabla: Repository<Equipo>
    ) { }
    
    async crearprestamo(prestamo ) {
        var r= this.PrestamoTabla.insert(prestamo);
        for(let data of prestamo.detalleprestamo){
            
           let equipo= await this.equipoService.obtenerBuenos(data.id_tipo,1)
           let r2;
           let prestar=[];
           for(let d of equipo){
            r2=await this.detalleService.obtener(d.id,prestamo.fecha_prestamo,prestamo.fecha_devolucion);
            if(r2.length ==0){
                prestar.push(d)
            }
            
            
           }
            console.log(prestar)
        }
        return r;
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
