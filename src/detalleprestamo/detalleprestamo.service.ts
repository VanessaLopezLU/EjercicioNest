import { Injectable } from '@nestjs/common';
import { CreateDetallePrestamoDto } from './dto/create-detalleprestamo.dto';
import { UpdateDetallePrestamoDto } from './dto/update-detalleprestamo.dto';

@Injectable()
export class DetalleprestamoService {
  create(createDetalleprestamoDto: CreateDetallePrestamoDto) {
    return 'This action adds a new detalleprestamo';
  }

  findAll() {
    return `This action returns all detalleprestamo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalleprestamo`;
  }

  update(id: number, updateDetalleprestamoDto: UpdateDetallePrestamoDto) {
    return `This action updates a #${id} detalleprestamo`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalleprestamo`;
  }
}
