import { Controller } from '@nestjs/common';
import { EstadoUsuarioService } from './estado_usuario.service';

@Controller('estado-usuario')
export class EstadoUsuarioController {
  constructor(private readonly estadoUsuarioService: EstadoUsuarioService) {}
}
