import { Module } from '@nestjs/common';
import { DetallePrestamoService } from './detalle-prestamo.service';
import { DetallePrestamoController } from './detalle-prestamo.controller';

@Module({
  controllers: [DetallePrestamoController],
  providers: [DetallePrestamoService]
})
export class DetallePrestamoModule {}
