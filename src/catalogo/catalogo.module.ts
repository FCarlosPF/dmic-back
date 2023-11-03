import { Module } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { CatalogoController } from './catalogo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Catalogo } from './entities/catalogo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Catalogo])],
  controllers: [CatalogoController],
  providers: [CatalogoService],
})
export class CatalogoModule {}
