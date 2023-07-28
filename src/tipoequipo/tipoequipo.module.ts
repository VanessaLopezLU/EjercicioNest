import { Module } from '@nestjs/common';
import { TipoequipoService } from './tipoequipo.service';
import { TipoequipoController } from './tipoequipo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tipoEquipo } from './entities/Tipo-Equipo.entity';


@Module({
  imports : [TypeOrmModule.forFeature([tipoEquipo])],
  controllers: [TipoequipoController],
  providers: [TipoequipoService],
  exports : [TypeOrmModule]
})

export class tipoequipoModule {}
