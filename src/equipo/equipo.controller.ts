import { Controller } from '@nestjs/common';
import { EquipoService } from './equipo.service';

@Controller('equipo')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}
}
