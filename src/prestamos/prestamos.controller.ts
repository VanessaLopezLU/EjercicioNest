import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';

@Controller('prestamo')
export class PrestamosController {
  constructor(private readonly prestamosService: PrestamosService) {}
  @Post('/crear')
  crear(@Body() CreateEstadoEquipoDto: CreatePrestamoDto) {
    return this.prestamosService.Crearprestamo(CreateEstadoEquipoDto);
  }

  @Get('')
  obtener() {
    return this.prestamosService.ObtenerPrestamo();
  }
  
  @Delete('/:id')
  eliminar(@Param('id') id: number) {
    return this.prestamosService.EliminarPrestamo(id);
  }
  @Put('/actualizar') 
    actualizar(@Body() UpdatePrestamoDto: UpdatePrestamoDto){
      return this.prestamosService.ActualizarPrestamo(UpdatePrestamoDto);
  }
}
