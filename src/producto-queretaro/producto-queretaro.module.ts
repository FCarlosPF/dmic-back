import { Module } from '@nestjs/common';
import { ProductoQueretaroService } from './producto-queretaro.service';
import { ProductoQueretaroController } from './producto-queretaro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ProductoQueretaro } from './entities/producto-queretaro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductoQueretaro]), AuthModule],
  controllers: [ProductoQueretaroController],
  providers: [ProductoQueretaroService],
})
export class ProductoQueretaroModule {}
