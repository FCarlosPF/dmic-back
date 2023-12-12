import { Module } from '@nestjs/common';
import { TrazabilidadChinaService } from './trazabilidad-china.service';
import { TrazabilidadChinaController } from './trazabilidad-china.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrazabilidadChina } from './entities/trazabilidad-china.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrazabilidadChina])],
  controllers: [TrazabilidadChinaController],
  providers: [TrazabilidadChinaService],
})
export class TrazabilidadChinaModule {}
