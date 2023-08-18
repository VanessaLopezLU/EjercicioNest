import { Module } from '@nestjs/common';
import { EstadoUsuarioService } from './estado_usuario.service';
import { EstadoUsuarioController } from './estado_usuario.controller';

@Module({
  controllers: [EstadoUsuarioController],
  providers: [EstadoUsuarioService]
})
export class EstadoUsuarioModule {}
