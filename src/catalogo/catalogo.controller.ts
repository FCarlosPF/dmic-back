import { Controller, Get, Post, Body, Put , Param, Delete, NotFoundException, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CatalogoService } from './catalogo.service';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';
import { Express } from 'express';

@Controller('catalogoChina')
export class CatalogoController {
  constructor(private readonly catalogoService: CatalogoService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(@Body() createCatalogoDto: CreateCatalogoDto, @UploadedFile() file: Express.Multer.File) {
    console.log(file);
    if (!file) {
      throw new BadRequestException('No se proporcionó ningún archivo.');
    } 
  
    createCatalogoDto.imagen = file.buffer;
    return this.catalogoService.create(createCatalogoDto);
  }

  @Get()
  findAll() {
    return this.catalogoService.findAll();
  }

  @Get('iqms/:iqms_aka')
  findOneIQMS_aka(@Param('iqms_aka') iqms: string) {
    const catalogo =  this.catalogoService.findOneIQMS_aka(+iqms);
    if (!catalogo) {
      throw new NotFoundException('Producto no encontrado');
    }

    return catalogo;
  }

  @Get('iqms/:iqms_dg')
  findOneIQMS_dg(@Param('iqms_dg') iqms: string) {
    const catalogo =  this.catalogoService.findOneIQMS_dg(+iqms);
    if (!catalogo) {
      throw new NotFoundException('Producto no encontrado');
    }

    return catalogo;
  }

  //catalogoChina/iqms-search/:iqms_aka/:iqms_dg
  @Get('iqms-search/:iqms_aka/:iqms_dg')
async findTwoIQMS(@Param('iqms_aka') iqmsAka: string, @Param('iqms_dg') iqmsDg: string) {
  const catalogo = this.catalogoService.findTwoIQMS(+iqmsAka, +iqmsDg);
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
