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
    const { foto, ...rest } = createCatalogoDto;
    const catalogo = this.catalogoRepository.create({
      ...rest,
      foto: Buffer.from(foto),
    });
    return this.catalogoRepository.save(catalogo);
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

  async findOneIQMS2(iqms2: number) {
    if (isNaN(iqms2)) {
      throw new BadRequestException('El valor proporcionado no es un número válido.');
    }    
    const resultados = await this.catalogoRepository.findBy({ iqms2 });
    if (resultados.length > 0) {
      return resultados[0];
    }
    return null;
  }

  async findOneIQMS3(iqms3: number) {
    if (isNaN(iqms3)) {
      throw new BadRequestException('El valor proporcionado no es un número válido.');
    }    
    const resultados = await this.catalogoRepository.findBy({ iqms3 });
    if (resultados.length > 0) {
      return resultados[0];
    }
    return null;
  }

  /*async findOneIQMS_1_2(iqms1: number,iqms2: number) {
    
    if (isNaN(iqms1) || isNaN(iqms2)) {
      throw new BadRequestException('Los valores proporcionados no son números válidos.');
    }  
    const resultado = await this.catalogoRepository.find({
      where: {  iqms1,  iqms2 },
    });
    if (resultado.length > 0) {
      return resultado[0];
    }
    return null;
  }
  async findOneIQMS_1_3(iqms1: number,iqms3: number) {
    if (isNaN(iqms1) || isNaN(iqms3)) {
      throw new BadRequestException('Los valores proporcionados no son números válidos.');
    }  
    const resultado = await this.catalogoRepository.find({
        where: { iqms1, iqms3  },
      });
      if (resultado.length > 0) {
        return resultado[0];
      }
      return null;
    }
  async findOneIQMS_2_3(iqms2: number,iqms3: number) {
    if (isNaN(iqms2) || isNaN(iqms3)) {
      throw new BadRequestException('Los valores proporcionados no son números válidos.');
    }  
    const resultado = await this.catalogoRepository.find({
      where: { iqms2, iqms3  },
    });
    if (resultado.length > 0) {
      return resultado[0];
    }
    return null;
  }

  async findProductByIQMS(iqms1: number, iqms2: number, iqms3: number) {
    if (isNaN(iqms1) || isNaN(iqms2) || isNaN(iqms3)) {
      throw new BadRequestException('Al menos uno de los valores proporcionados no es un número válido.');
    }
  
    const resultados = await this.catalogoRepository.find({
      where: { iqms1, iqms2, iqms3 },
    });
  
    if (resultados.length > 0) {
      return resultados[0];
    }
  
    return null;
  }*/
  
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
