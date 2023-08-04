import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/User.dto';

@Controller('user')
export class UserController {
 constructor(private readonly userService:UserService){}
 
 @Post('/crear')
  CrearUser(@Body()UserDto: UserDto){
   return this.userService.CrearUser(UserDto);
 }
 @Get('/obtener')
 obtener() {
   return this.userService.ObtenerUser();
 }
 @Delete('/eliminar/:cedula')
 eliminar(@Param('cedula') cedula: number) {
   return this.userService.eliminarUser(cedula);
 }
 @Put('/actualizar') 
   actualizar(@Body() UserDto: UserDto){
     return this.userService.actualizarUser(UserDto);
 }


}
