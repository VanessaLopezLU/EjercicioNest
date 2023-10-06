import { Module } from '@nestjs/common';
import { DetalleprestamoService } from './detalleprestamo.service';
import { DetalleprestamoController } from './detalleprestamo.controller';

@Module({
  controllers: [DetalleprestamoController],
  providers: [DetalleprestamoService]
})
export class DetalleprestamoModule {}
