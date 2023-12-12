import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TrazabilidadChina } from './entities/trazabilidad-china.entity';


@Injectable()
export class TrazabilidadChinaService {
  constructor(
    @InjectRepository(TrazabilidadChina)
    private readonly trazabilidadRepository: Repository<TrazabilidadChina>,
  ) {}

  async obtenerDatosTrazabilidad(id: number): Promise<TrazabilidadChina | null> {
    // Aquí implementa la lógica para obtener los datos de trazabilidad según el código QR
    // Puedes usar el código QR para buscar en tu base de datos y devolver la información.
    // Por ejemplo:
    const trazabilidadChina = await this.trazabilidadRepository.findOne({ where: { id } });

    return trazabilidadChina || null;
  }
}