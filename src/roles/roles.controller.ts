import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RolesService } from "./roles.service";
import { CreateRolesDto } from "./dto/create-roles.dto";
import { UpdateRolesDto } from './dto/update-roles.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}
  @Post('/crearRol')
  crearRoles(@Body()CreateRolesDto: CreateRolesDto){
    return this.rolesService.crearRoles(CreateRolesDto);
  }
  @Get('/obtenerRol')
  obtenerRoles(){
    return this.rolesService.obtenerRoles();
  }
  @Delete('/eliminarRol/:id')
  eliminarRoles(@Param('id') id: number){
    return this.rolesService.eliminarRoles(id);
  }
  @Put('/actualizarRol')
  actualizarRoles(@Body() UpdateRolesDto: UpdateRolesDto){
    return this.rolesService.autualizarRoles(UpdateRolesDto);
  }
}
