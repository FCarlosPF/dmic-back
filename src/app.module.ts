import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { CatalogoModule } from './catalogo/catalogo.module';
import { Catalogo } from './catalogo/entities/catalogo.entity';

@Module({
  imports: [
     TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'pruebita_nest',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true
     })
    ,ConfigModule.forRoot({
      envFilePath: `.dev.env`,
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
    CatalogoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
