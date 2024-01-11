import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrazabilidadQueretaroService } from './trazabilidad-queretaro.service';
import { CreateTrazabilidadQueretaroDto } from './dto/create-trazabilidad-queretaro.dto';
import { UpdateTrazabilidadQueretaroDto } from './dto/update-trazabilidad-queretaro.dto';

@Controller('trazabilidad-queretaro')
export class TrazabilidadQueretaroController {
  constructor(private readonly trazabilidadQueretaroService: TrazabilidadQueretaroService) {}

  @Get('/qr/:codigoQr')
  async obtenerDatosTrazabilidad(@Param('codigoQr') id: number) {
    const datosTrazabilidad = await this.trazabilidadQueretaroService.obtenerDatosTrazabilidad(id);
    return { datosTrazabilidad };
  }
}
