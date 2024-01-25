import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Catalogo } from './entities/catalogo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatalogoService {
  constructor(
    @InjectRepository(Catalogo)
    private readonly catalogoRepository: Repository<Catalogo>,
  ) {}

  async create(createCatalogoDto: CreateCatalogoDto) {
    const { imagen, ...rest } = createCatalogoDto;
    const catalogo = this.catalogoRepository.create({
      ...rest,
      imagen: Buffer.from(imagen), // Convertir la imagen a Buffer antes de almacenarla
    });
    return this.catalogoRepository.save(catalogo);
  }

  async findAll() {
    return await this.catalogoRepository.find();
  }

  async findOneIQMS_aka(iqms_aka: number) {
    if (isNaN(iqms_aka)) {
      throw new BadRequestException('El valor proporcionado no es un número válido.');
    }
    const resultados = await this.catalogoRepository.findBy({ iqms_aka });
    if (resultados.length > 0) {
      return resultados[0];
    }
    return null;
  }

  async findOneIQMS_dg(iqms_dg: number) {
    if (isNaN(iqms_dg)) {
      throw new BadRequestException('El valor proporcionado no es un número válido.');
    }    
    const resultados = await this.catalogoRepository.findBy({ iqms_dg });
    if (resultados.length > 0) {
      return resultados[0];
    }
    return null;
  }

  async findTwoIQMS(iqmsAka: number, iqmsDg: number) {
    if (isNaN(iqmsAka) || isNaN(iqmsDg)) {
      throw new BadRequestException('Al menos uno de los valores proporcionados no es un número válido.');
    }
  
    let whereCondition: any = {};
  
    if (iqmsAka !== 0) {
      whereCondition.iqms_aka = iqmsAka;
    }
  
    if (iqmsDg !== 0) {
      whereCondition.iqms_dg = iqmsDg;
    }
  
    const resultados = await this.catalogoRepository.find({
      where: whereCondition,
    });
  
    if (resultados.length > 0) {
      return resultados[0];
    }
  
    // Si ninguno de los dos es 0, busca por ambos
    if (iqmsAka !== 0 && iqmsDg !== 0) {
      const resultadosAmbos = await this.catalogoRepository.find({
        where: { iqms_aka: iqmsAka, iqms_dg: iqmsDg },
      });
  
      if (resultadosAmbos.length > 0) {
        return resultadosAmbos[0];
      }
    }
  
    return null;
  }
  
  
  async findOneMolde(molde: string) {
    const resultados = await this.catalogoRepository.findBy({ molde });
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
