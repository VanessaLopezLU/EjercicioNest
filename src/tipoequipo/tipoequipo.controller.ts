import { Controller } from '@nestjs/common';
import { TipoequipoService } from './tipoequipo.service';

@Controller('tipoequipo')
export class TipoequipoController {
  constructor(private readonly tipoequipoService: TipoequipoService) {}
}
