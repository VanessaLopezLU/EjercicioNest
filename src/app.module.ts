import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import {EstadoprestamoModule} from './estadoprestamo/estadoprestamo.module' 
import { User } from './user/user.entity';
import { Estadoprestamo } from './estadoprestamo/entities/estadoprestamo.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'biblioteca',
      password: '12345',
      database: 'biblioteca',
      entities: [User,Estadoprestamo],
      synchronize: true,
      connectTimeout: 40000,
    }),
    UserModule,EstadoprestamoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
