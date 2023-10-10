import { Module } from '@nestjs/common';
import { DetalleprestamoService } from './detalleprestamo.service';
import { DetalleprestamoController } from './detalleprestamo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetallePrestamo } from './entities/detalleprestamo.entity';
import { Equipo } from 'src/equipo/entities/Equipo.entity';
import { Prestamo } from 'src/prestamos/entities/prestamos.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DetallePrestamo,Equipo,Prestamo])],
  controllers: [DetalleprestamoController],
  providers: [DetalleprestamoService],
  exports:[DetalleprestamoService,TypeOrmModule]
})
export class DetalleprestamoModule {}
