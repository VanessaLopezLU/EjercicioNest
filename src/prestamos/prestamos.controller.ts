import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { Prestamo } from './entities/prestamos.entity';

@Controller('prestamo')
export class PrestamosController {
  constructor(private readonly prestamosService: PrestamosService) {}
  @Post('/crear')
  crear(@Body() prestamocrear: CreatePrestamoDto) {
    return this.prestamosService.crearprestamo(prestamocrear);
  }

  @Get('')
  obtenerprestamo() {
    return this.prestamosService.obtener();
  }
  @Get('/obtenerPorCedula/:cedula')
    obtenerPorCedula(@Param('cedula') cedula:number ){
        return this.prestamosService.obtenerPorCedula(cedula);
  }

  @Delete('/:id')
  eliminar(@Param('id') id: number) {
    return this.prestamosService.eliminarPrestamo(id);
  }
  
}
