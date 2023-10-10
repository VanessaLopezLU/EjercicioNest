import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { Prestamo } from './entities/prestamos.entity';

@Controller('prestamo')
export class PrestamosController {
  constructor(private readonly prestamosService: PrestamosService) {}
  @Post('/crear')
  crear(@Body() prestamocrear: Prestamo) {
    return this.prestamosService.crearprestamo(prestamocrear);
  }

  @Get('')
  obtener() {
    return this.prestamosService.ObtenerPrestamo();
  }
  
  @Delete('/:id')
  eliminar(@Param('id') id: number) {
    return this.prestamosService.EliminarPrestamo(id);
  }
  /*@Put('/actualizar') 
    actualizar(@Body() UpdatePrestamoDto: UpdatePrestamoDto){
      return this.prestamosService.ActualizarPrestamo(UpdatePrestamoDto);
  }*/
}
