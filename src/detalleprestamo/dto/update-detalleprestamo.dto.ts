import { PartialType } from '@nestjs/mapped-types';
import { CreateDetallePrestamoDto } from './create-detalleprestamo.dto';

export class UpdateDetallePrestamoDto extends PartialType(CreateDetallePrestamoDto) {}
