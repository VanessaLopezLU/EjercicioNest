import { Module } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { PrestamosController } from './prestamos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestamo } from './entities/prestamos.entity';
import { EstadoPrestamo } from 'src/estadoprestamo/entities/estadoprestamo.entity';
import { User } from 'src/user/user.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Prestamo,EstadoPrestamo,User])],
  controllers: [PrestamosController],
  providers: [PrestamosService],
  exports : [TypeOrmModule]
})
export class PrestamosModule {}
