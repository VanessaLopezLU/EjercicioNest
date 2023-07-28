import { Controller } from '@nestjs/common';
import { DetallePrestamoService } from './detalle-prestamo.service';

@Controller('detalle-prestamo')
export class DetallePrestamoController {
  constructor(private readonly detallePrestamoService: DetallePrestamoService) {}
}
