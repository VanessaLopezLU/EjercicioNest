import { Injectable } from '@nestjs/common';
import { CreateEstadoprestamoDto } from './dto/create-estadoprestamo.dto';
import { UpdateEstadoprestamoDto } from './dto/update-estadoprestamo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estadoprestamo } from './entities/estadoprestamo.entity';
@Injectable()
export class EstadoprestamoService {
  constructor(
    @InjectRepository(Estadoprestamo)
    private estadoprestamoTabla:Repository<Estadoprestamo>
  ){}

  async create(createEstadoprestamoDto: CreateEstadoprestamoDto) {
    let Noexiste = await this.validarNOQueExista(createEstadoprestamoDto);
    if (Noexiste) {
      return await this.estadoprestamoTabla.insert(createEstadoprestamoDto);
    }
    return 'Ya existe';
   
  }

  async todo(){
    return await this.estadoprestamoTabla.find();
  }


  async validarNOQueExista(prestamo) {
    return await this.estadoprestamoTabla.findOne({where : {estado : prestamo.estado}}).then((resp) => {
      if (resp == null) {
        return true;
      }
      return false;
    });
  }


}
