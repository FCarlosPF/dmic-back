import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { CatalogoModule } from './catalogo/catalogo.module';
import { Catalogo } from './catalogo/entities/catalogo.entity';
import { TrazabilidadChinaModule } from './trazabilidad-china/trazabilidad-china.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT,10),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true
     }),
    UsersModule,
    AuthModule,
    CatalogoModule,
    TrazabilidadChinaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
