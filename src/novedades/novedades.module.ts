import { Module } from '@nestjs/common';
import { NovedadesService } from './novedades.service';
import { NovedadesController } from './novedades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Novedade } from './entities/novedades.entity';
import { Prestamo } from 'src/prestamos/entities/prestamos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Novedade,Prestamo])],
  controllers: [NovedadesController],
  providers: [NovedadesService],
  exports:[TypeOrmModule]
})
export class NovedadesModule {}
