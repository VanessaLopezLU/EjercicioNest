import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import {EstadoprestamoModule} from './estadoprestamo/estadoprestamo.module' 
import { User } from './user/user.entity';
import { Estadoprestamo } from './estadoprestamo/entities/estadoprestamo.entity';
import { EstadoEquipoModule } from './estado-equipo/estado-equipo.module';
import { EstadoEquipo } from './estado-equipo/entities/estado-equipo.entity';
import { tipoequipoModule } from './tipoequipo/tipoequipo.module';
import { RolesModule } from './roles/roles.module';
import { Roles } from './roles/entities/Roles.entity';
import { EquipoModule } from './equipo/equipo.module';

import { NovedadesModule } from './novedades/novedades.module';
import { PrestamosModule } from './prestamos/prestamos.module';
import { TipoEquipo } from './tipoequipo/entities/Tipo-Equipo.entity';
import { Equipo} from './equipo/entities/Equipo.entity';

import { Novedade } from './novedades/entities/novedades.entity';
import { Prestamo } from './prestamos/entities/prestamos.entity';
import { EstadoUsuarioModule } from './estado_usuario/estado_usuario.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'biblioteca',
      entities: [User,Estadoprestamo,EstadoEquipo,TipoEquipo,Roles,Equipo,Novedade,Prestamo],
      synchronize: false,
      autoLoadEntities: true,
      
        }),
    UserModule,EstadoprestamoModule, EstadoEquipoModule, tipoequipoModule, RolesModule, EquipoModule, NovedadesModule, PrestamosModule, EstadoUsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
