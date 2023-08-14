import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NovedadesService } from './novedades.service';
import { CreateNovedadesDto } from './dto/create-novedades.dto';
import { UpdateNovedadesDto } from './dto/update-novedades.dto';

@Controller('novedades')
export class NovedadesController {
  constructor(private readonly novedadesService: NovedadesService) {}

  @Post('/crearNovedad')
  create(@Body() CreateNovedadesDto: CreateNovedadesDto){
    return this.novedadesService.CrearNovedad(CreateNovedadesDto);
  }

  @Get('/obtenerNovedad')
  ObtenerNovedad(){
    return this.novedadesService.ObtenerNovedad();
  }

  @Delete('/eliminar/:id')
  EliminarNovedad(@Param('id') id: number){
    return this.novedadesService.EliminarNovedad(id);
  }

  @Put('/actualizar')
  ActualizarNovedad(@Body() UpdateNovedadesDto: UpdateNovedadesDto){
    return this.novedadesService.ActualizarNovedad(UpdateNovedadesDto);
  }
    
 }
    


