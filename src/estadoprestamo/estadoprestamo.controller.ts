import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadoprestamoService } from './estadoprestamo.service';
import { CreateEstadoprestamoDto } from './dto/create-estadoprestamo.dto';
import { UpdateEstadoprestamoDto } from './dto/update-estadoprestamo.dto';

@Controller('estadoprestamo')
export class EstadoprestamoController {
  constructor(private readonly estadoprestamoService: EstadoprestamoService) {}

  @Post('/crear')
  create(@Body() createEstadoprestamoDto: CreateEstadoprestamoDto) {
    return this.estadoprestamoService.create(createEstadoprestamoDto);
  }

  @Get('/todo')
  todo(){
    return this.estadoprestamoService.todo();
  }


  


}
