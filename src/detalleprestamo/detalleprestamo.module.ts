import { Module } from '@nestjs/common';
import { DetalleprestamoService } from './detalleprestamo.service';
import { DetalleprestamoController } from './detalleprestamo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetallePrestamo } from './entities/detalleprestamo.entity';


@Module({
  imports:[TypeOrmModule.forFeature([DetallePrestamo])],
  controllers: [DetalleprestamoController],
  providers: [DetalleprestamoService],
  exports:[DetalleprestamoService,TypeOrmModule]
})
export class DetalleprestamoModule {}
