import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prestamo } from './entities/prestamos.entity';
import { Repository } from 'typeorm';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';

@Injectable()
export class PrestamosService {
    constructor(
        @InjectRepository(Prestamo)
        private PrestamoTabla: Repository<Prestamo>
    ){}
    async Crearprestamo(CreatePrestamoDto: CreatePrestamoDto){
        let Noexiste = await this.ValidarQueNoExista(CreatePrestamoDto);
        if(Noexiste){
            return await this.PrestamoTabla.insert(CreatePrestamoDto)
        }
        return 'Ya Existe'
    }
    async ObtenerPrestamo(){
        return await this.PrestamoTabla.find();
    }
    async ValidarQueNoExista(ambineteP:CreatePrestamoDto){
        return await this.PrestamoTabla.findOne({where:{ambiente:ambineteP.ambiente}}).then((resp)=>{
            if(resp==null){
                return true;
            }
            return false;
        })
    }
    async EliminarPrestamo(id:number){
        return await this.PrestamoTabla.delete({id:id});
    }
    async ActualizarPrestamo(Prestamoactualizar: UpdatePrestamoDto){
        return await this.PrestamoTabla.update(Prestamoactualizar.id,Prestamoactualizar)
    }
}
