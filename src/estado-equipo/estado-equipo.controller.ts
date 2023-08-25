import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EstadoEquipoService } from './estado-equipo.service';
import { CreateEstadoEquipoDto } from './dto/create-estadoequipo.dto';
import { UpdateEstadoEquipoDto } from './dto/update-estadoequipo.dto';

@Controller('estado-equipo')
export class EstadoEquipoController {
  constructor(private readonly estadoEquipoService: EstadoEquipoService) {}
  @Post('/crearEstado')
  crear(@Body() CreateEstadoEquipoDto: CreateEstadoEquipoDto) {
    return this.estadoEquipoService.crear(CreateEstadoEquipoDto);
  }

  @Get('/obtenerEstado')
  obtenerdatos() {
    return this.estadoEquipoService.obtener();
  }
  @Delete('/eliminarEstado/:id')
  eliminar(@Param('id') id: number) {
    return this.estadoEquipoService.eliminarestado(id);
  }
  @Put('/actualizarestado') 
    actualizarEstado(@Body() UpdateEstadoEquipoDto: UpdateEstadoEquipoDto){
      return this.estadoEquipoService.actualizarestado(UpdateEstadoEquipoDto);
  }
  
 
  

}
