import { Controller } from '@nestjs/common';
import { NovedadesService } from './novedades.service';

@Controller('novedades')
export class NovedadesController {
  constructor(private readonly novedadesService: NovedadesService) {}
}
