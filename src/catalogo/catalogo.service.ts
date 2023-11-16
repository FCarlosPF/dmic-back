import { Injectable } from '@nestjs/common';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Catalogo } from './entities/catalogo.entity';
import { Repository } from 'typeorm';
import * as sharp from 'sharp';

@Injectable()
export class CatalogoService {
  constructor(
    @InjectRepository(Catalogo)
    private readonly catalogoRepository: Repository<Catalogo>,
  ) {}

  async create(createCatalogoDto: CreateCatalogoDto) {
    return this.catalogoRepository.save(createCatalogoDto);
  }

  async findAll() {
    return await this.catalogoRepository.find();
  }

  async findOne(iqms: number) {
    const resultados = await this.catalogoRepository.findBy({ iqms });
    if (resultados.length > 0) {
      return resultados[0];
    }
    return null;
  }

  async update(iqms: number, updateCatalogoDto: UpdateCatalogoDto) {
    return await this.catalogoRepository.update(iqms, updateCatalogoDto);
  }

  async remove(iqms: number) {
    return await this.catalogoRepository.delete(iqms);
  }


}
