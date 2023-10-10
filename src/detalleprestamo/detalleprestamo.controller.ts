import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DetalleprestamoService } from './detalleprestamo.service';
import { CreateDetallePrestamoDto } from './dto/create-detalleprestamo.dto';
import { UpdateDetallePrestamoDto } from './dto/update-detalleprestamo.dto';

@Controller('detalle-prestamo')
export class DetalleprestamoController {
  constructor(private readonly detalleprestamoService: DetalleprestamoService) {}

  @Post('/crear')
  crear(@Body() createDetalleprestamoDto: CreateDetallePrestamoDto) {
    return this.detalleprestamoService.crearPrestamo(createDetalleprestamoDto);
  }

  /*@Get()
  obtenerDatos() {
    return this.detalleprestamoService.obtener();
  }*/

  @Delete('/:id')
  eliminar(@Param('id') id: number) {
    return this.detalleprestamoService.eliminarPrestamo(id);
  }
  @Put('/actualizar') 
    actualizar(@Body() updateDetallePrestamoDto: UpdateDetallePrestamoDto){
      return this.detalleprestamoService.actualizarPrestamo(updateDetallePrestamoDto);

  } 
}
