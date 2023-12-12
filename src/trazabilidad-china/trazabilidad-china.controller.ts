import { Controller, Get, Param } from '@nestjs/common';
import { TrazabilidadChinaService } from './trazabilidad-china.service';

@Controller('trazabilidad-china')
export class TrazabilidadChinaController {
  constructor(private readonly trazabilidadChinaService: TrazabilidadChinaService) {}

  @Get('/qr/:codigoQr')
  async obtenerDatosTrazabilidad(@Param('codigoQr') id: number) {
    const datosTrazabilidad = await this.trazabilidadChinaService.obtenerDatosTrazabilidad(id);
    return { datosTrazabilidad };
  }
}