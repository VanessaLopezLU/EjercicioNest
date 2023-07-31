import { Module } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { EquipoController } from './equipo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoEquipo } from 'src/estado-equipo/entities/estado-equipo.entity';
import { Equipo } from './entities/Equipo.entity';
import { TipoEquipo } from 'src/tipoequipo/entities/Tipo-Equipo.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Equipo,TipoEquipo,EstadoEquipo])],
  controllers: [EquipoController],
  providers: [EquipoService],
  exports : [TypeOrmModule]
})
export class EquipoModule {}
