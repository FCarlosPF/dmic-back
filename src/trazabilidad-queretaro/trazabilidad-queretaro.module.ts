import { Module } from '@nestjs/common';
import { TrazabilidadQueretaroService } from './trazabilidad-queretaro.service';
import { TrazabilidadQueretaroController } from './trazabilidad-queretaro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrazabilidadQueretaro } from './entities/trazabilidad-queretaro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrazabilidadQueretaro])],
  controllers: [TrazabilidadQueretaroController],
  providers: [TrazabilidadQueretaroService],
})
export class TrazabilidadQueretaroModule {}
