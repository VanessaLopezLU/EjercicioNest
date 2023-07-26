import { Module } from '@nestjs/common';
import { TipoequipoService } from './tipoequipo.service';
import { TipoequipoController } from './tipoequipo.controller';

@Module({
  controllers: [TipoequipoController],
  providers: [TipoequipoService]
})
export class TipoequipoModule {}
