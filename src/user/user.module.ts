import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Prestamo } from 'src/prestamos/entities/prestamos.entity';
import { Roles } from 'src/roles/entities/Roles.entity';

@Module({
  imports : [TypeOrmModule.forFeature([User,Prestamo,Roles])],
  controllers: [UserController],
  providers: [UserService],
  exports : [TypeOrmModule]
  
})
export class UserModule {}
