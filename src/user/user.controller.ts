import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/User.dto';

@Controller('user')
export class UserController {
 constructor(private readonly userService:UserService){}
 
 @Post('/crear')
  CrearUser(@Body()UserDto: UserDto){
   return this.userService.CrearUser(UserDto);
 }

}
