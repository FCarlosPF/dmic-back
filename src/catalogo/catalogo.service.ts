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
    const catalogos =  await this.catalogoRepository.find();

    const catalogosConImagenesDecodificadas = await Promise.all(
      catalogos.map(async (catalogo) => {
        catalogo.imagen = await this.decodeImage(catalogo.imagen);
        return catalogo;
      }),
    );

    return catalogosConImagenesDecodificadas;

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

  private async decodeImage(imagen: Buffer): Promise<Buffer> {
    // Perform decoding operations if necessary
    // For example, you can use sharp here
    // Note: Make sure to adjust the logic according to your specific needs
    return sharp(imagen).resize(200, 200).toBuffer();
  }
}
