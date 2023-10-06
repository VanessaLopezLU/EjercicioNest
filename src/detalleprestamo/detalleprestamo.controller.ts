import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleprestamoService } from './detalleprestamo.service';
import { CreateDetallePrestamoDto } from './dto/create-detalleprestamo.dto';
import { UpdateDetallePrestamoDto } from './dto/update-detalleprestamo.dto';

@Controller('detalle-prestamo')
export class DetalleprestamoController {
  constructor(private readonly detalleprestamoService: DetalleprestamoService) {}

  @Post()
  create(@Body() createDetalleprestamoDto: CreateDetallePrestamoDto) {
    return this.detalleprestamoService.create(createDetalleprestamoDto);
  }

  @Get()
  findAll() {
    return this.detalleprestamoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleprestamoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetalleprestamoDto: UpdateDetallePrestamoDto) {
    return this.detalleprestamoService.update(+id, updateDetalleprestamoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleprestamoService.remove(+id);
  }
}
