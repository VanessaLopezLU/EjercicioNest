import { Module } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { PrestamosController } from './prestamos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestamo } from './entities/prestamos.entity';
import { Estadoprestamo } from 'src/estadoprestamo/entities/estadoprestamo.entity';
import { User } from 'src/user/user.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Prestamo,Estadoprestamo,User])],
  controllers: [PrestamosController],
  providers: [PrestamosService],
  exports : [TypeOrmModule]
})
export class PrestamosModule {}
