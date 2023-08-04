import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipo } from './entities/Equipo.entity';
import { Repository } from 'typeorm';
import { EquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';


@Injectable()
export class EquipoService {
        constructor(
            @InjectRepository(Equipo)
            private Equipotabla: Repository<Equipo>
        ) { }

    async CrearEquipo(EquipoDtoA) {
        let Noexiste = await this.ValidarQueNoExista(EquipoDtoA);
        if (Noexiste) {
            return await this.Equipotabla.insert(EquipoDtoA)
        }
        return 'Ya Existe'
    }
    async ObtenerEquipo() {
        return await this.Equipotabla.find();
    }

    async ValidarQueNoExista(serialE:EquipoDto) {
        return await this.Equipotabla.findOne({where: {serial:serialE.serial}}).then((resp) =>{
            if(resp == null){
                return true;
            }
            return false;
        })
    }
    async EliminarEquipo(id: number){
        return await this.Equipotabla.delete({id_equipo: id});
    }
    async ActualizarEquipo(equipoactualizar ){
        return await this.Equipotabla.update(equipoactualizar.id_equipo,equipoactualizar);
    }

}
