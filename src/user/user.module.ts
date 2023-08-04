import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Prestamo } from 'src/prestamos/entities/prestamos.entity';

@Module({
  imports : [TypeOrmModule.forFeature([User,Prestamo])],
  controllers: [UserController],
  providers: [UserService],
  exports : [TypeOrmModule]
  
})
export class UserModule {}
