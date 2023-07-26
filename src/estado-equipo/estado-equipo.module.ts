import { Module } from '@nestjs/common';
import { EstadoEquipoService } from './estado-equipo.service';
import { EstadoEquipoController } from './estado-equipo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estadoequipo } from './entities/estado-equipo.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Estadoequipo])],
  controllers: [EstadoEquipoController],
  providers: [EstadoEquipoService],
  exports : [TypeOrmModule]
})
export class EstadoEquipoModule {}
