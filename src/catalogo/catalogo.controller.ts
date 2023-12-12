import { Controller, Get, Post, Body, Put , Param, Delete, NotFoundException } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';

@Controller('catalogoChina')
export class CatalogoController {
  constructor(private readonly catalogoService: CatalogoService) {}

  @Post()
  create(@Body() createCatalogoDto: CreateCatalogoDto) {
    return this.catalogoService.create(createCatalogoDto);
  }

  @Get()
  findAll() {
    return this.catalogoService.findAll();
  }

  @Get('iqms/:iqms')
  findOneIQMS(@Param('iqms') iqms: string) {
    const catalogo =  this.catalogoService.findOneIQMS(+iqms);
    if (!catalogo) {
      throw new NotFoundException('Producto no encontrado');
    }

    return catalogo;
  }

  @Get('molde/:molde')
  async findOneMolde(@Param('molde') molde: string) {
    return this.catalogoService.findOneMolde(molde);
  }

  @Put(':iqms')
  update(@Param('iqms') iqms: string, @Body() updateCatalogoDto: UpdateCatalogoDto) {
    return this.catalogoService.update(+iqms, updateCatalogoDto);
  }

  @Delete(':iqms')
  remove(@Param('iqms') iqms: string) {
    return this.catalogoService.remove(+iqms);
  }
}
