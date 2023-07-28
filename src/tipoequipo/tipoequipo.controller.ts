import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TipoequipoService } from './tipoequipo.service';
import { CreateTipoEquipoDto } from './dto/create-tipoEquipo.dto';
import { UpdateTipoEquipoDto } from './dto/update-tipoEquipo.dto';

@Controller('tipoequipo')
export class TipoequipoController {
  constructor(private readonly tipoequipoService: TipoequipoService) {}
  @Post('/crearTipo')
  crearTipo(@Body() CreateTipoEquipoDto: CreateTipoEquipoDto) {
    return this.tipoequipoService.crearTipo(CreateTipoEquipoDto);
  }

  @Get('/obtenerTipo')
  obtenerTipo() {
    return this.tipoequipoService.obtenerTipo();
  }
  @Delete('/eliminarTipo/:id')
  eliminarTipo(@Param('id') id: number) {
    return this.tipoequipoService.eliminarTipo(id);
  }
  @Put('/actualizarTipo') 
    actualizarTipo(@Body() UpdateTipoEquipoDto: UpdateTipoEquipoDto){
      return this.tipoequipoService.autualizarTipo(UpdateTipoEquipoDto);
  }
 
  
}
