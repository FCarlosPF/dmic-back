import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductoQueretaroDto } from './dto/create-producto-queretaro.dto';
import { UpdateProductoQueretaroDto } from './dto/update-producto-queretaro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoQueretaro } from './entities/producto-queretaro.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductoQueretaroService {

  constructor(
    @InjectRepository(ProductoQueretaro)
    private readonly catalogoRepository: Repository<ProductoQueretaro>,
  ) {}

  async create(createCatalogoDto: CreateProductoQueretaroDto) {
    return this.catalogoRepository.save(createCatalogoDto);
  }

  async findAll() {
    return await this.catalogoRepository.find();
  }

  async findOneIQMS1(iqms1: number) {
    if (isNaN(iqms1)) {
      throw new BadRequestException('El valor proporcionado no es un número válido.');
    }
  
    
    const resultados = await this.catalogoRepository.findBy({ iqms1 });
    if (resultados.length > 0) {
      return resultados[0];
    }
    return null;
  }

  async findOneMolde1(molde1: string) {
    const resultados = await this.catalogoRepository.findBy({ molde1 });
    if (resultados.length > 0) {
      return resultados[0];
    }
    return null;
  }

  async update(iqms: number, updateCatalogoDto: UpdateProductoQueretaroDto) {
    return await this.catalogoRepository.update(iqms, updateCatalogoDto);
  }

  async remove(iqms: number) {
    return await this.catalogoRepository.delete(iqms);
  }



}
