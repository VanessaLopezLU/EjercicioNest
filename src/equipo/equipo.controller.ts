import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { EquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';

@Controller('equipo')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}
   @Post('/crearEquipo')
  crear(@Body() EquipoDto: EquipoDto) {
    return this.equipoService.CrearEquipo(EquipoDto);
  }

  @Get('/obtenerEquipo')
  obtenerdatos() {
    return this.equipoService.ObtenerEquipo();
  }
  @Delete('/eliminarEquipo/:id')
  eliminar(@Param('id') id: number) {
    return this.equipoService.EliminarEquipo(id);
  }
  @Put('/actualizarEquipo') 
    actualizarEstado(@Body() UpdateEquipoDto: UpdateEquipoDto){
      return this.equipoService.ActualizarEquipo(UpdateEquipoDto);
  } 
}
