import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { EquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';

@Controller('equipo')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}
   @Post('/crear')
  crear(@Body() equipoDto: EquipoDto) {
    return this.equipoService.crearEquipo(equipoDto);
  }

  @Get()
  obtenerDatos() {
    return this.equipoService.obtenerEquipo();
  }
  @Delete('/:id')
  eliminar(@Param('id') id: number) {
    return this.equipoService.eliminarEquipo(id);
  }
  @Put('/actualizar') 
    actualizarEstado(@Body() updateEquipoDto: UpdateEquipoDto){
      return this.equipoService.actualizarEquipo(updateEquipoDto);
  } 
}
