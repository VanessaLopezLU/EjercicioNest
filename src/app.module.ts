import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import {EstadoprestamoModule} from './estadoprestamo/estadoprestamo.module' 
import { User } from './user/user.entity';
import { Estadoprestamo } from './estadoprestamo/entities/estadoprestamo.entity';
import { EstadoEquipoModule } from './estado-equipo/estado-equipo.module';
import { Estadoequipo } from './estado-equipo/entities/estado-equipo.entity';
import { tipoequipoModule } from './tipoequipo/tipoequipo.module';
import { tipoEquipo } from './tipoequipo/entities/Tipo-Equipo.entity';
import { RolesModule } from './roles/roles.module';
import { Roles } from './roles/entities/Roles.entity';
import { EquipoModule } from './equipo/equipo.module';
import { DetallePrestamoModule } from './detalle-prestamo/detalle-prestamo.module';
import { PrestamoModule } from './prestamo/prestamo.module';
import { NovedadesModule } from './novedades/novedades.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'biblioteca',
      password: '12345',
      database: 'biblioteca',
      entities: [User,Estadoprestamo,Estadoequipo,tipoEquipo,Roles],
      synchronize: true,
      connectTimeout: 40000,
    }),
    UserModule,EstadoprestamoModule, EstadoEquipoModule, tipoequipoModule, RolesModule, EquipoModule, DetallePrestamoModule, PrestamoModule, NovedadesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
