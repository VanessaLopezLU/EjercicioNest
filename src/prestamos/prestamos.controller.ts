import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';

@Controller('prestamos')
export class PrestamosController {
  constructor(private readonly prestamosService: PrestamosService) {}
  @Post('/crearPrestamo')
  crear(@Body() CreateEstadoEquipoDto: CreatePrestamoDto) {
    return this.prestamosService.Crearprestamo(CreateEstadoEquipoDto);
  }

  @Get('/obtenerPrestamo')
  obtener() {
    return this.prestamosService.ObtenerPrestamo();
  }
  @Delete('/eliminarPrestamo/:id')
  eliminar(@Param('id') id: number) {
    return this.prestamosService.EliminarPrestamo(id);
  }
  @Put('/actualizarPrestamo') 
    actualizar(@Body() UpdatePrestamoDto: UpdatePrestamoDto){
      return this.prestamosService.ActualizarPrestamo(UpdatePrestamoDto);
  }
}
