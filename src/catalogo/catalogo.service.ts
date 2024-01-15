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

  async findOneIQMS(iqms_aka: number) {
    if (isNaN(iqms_aka)) {
      throw new BadRequestException('El valor proporcionado no es un número válido.');
    }
  
    
    const resultados = await this.catalogoRepository.findBy({ iqms_aka });
    if (resultados.length > 0) {
      return resultados[0];
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
