import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateNovedadesDto} from 'src/novedades/dto/create-novedades.dto';
import { UpdateNovedadesDto} from 'src/novedades/dto/update-novedades.dto';
import { Prestamo } from 'src/prestamos/entities/prestamos.entity';
import { Repository } from 'typeorm';
import { Novedade } from './entities/novedades.entity';

@Injectable()
export class NovedadesService {
    constructor(
        @InjectRepository(Novedade)
        private NovedadesTabla: Repository<Novedade>
    ){}
    async CrearNovedad(CreateNovedadespoDto: CreateNovedadesDto){
        let Noexiste = await this.ValidarQueNoExista(CreateNovedadespoDto);
        if(Noexiste){
            return await this.NovedadesTabla.insert(CreateNovedadespoDto)
        }
        return 'Ya Existe'
    }
    async ObtenerNovedad(){
        return await this.NovedadesTabla.find();
    }
    async ValidarQueNoExista(descripcionN:CreateNovedadesDto){
        return await this.NovedadesTabla.findOne({where:{descripcion:descripcionN.descripcion}}).then((resp)=>{
            if(resp==null){
                return true;
            }
            return false;
        })
    }
    async EliminarNovedad(id:number){
        return await this.NovedadesTabla.delete({id:id});
    }
    async ActualizarNovedad(Novedadesactualizar: UpdateNovedadesDto){
        return await this.NovedadesTabla.update(Novedadesactualizar.id,Novedadesactualizar)
    }
}
