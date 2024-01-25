import { Controller, Get, Post, Body, Param, Delete, NotFoundException, Put, UseInterceptors, UploadedFile, BadRequestException  } from '@nestjs/common';
import { ProductoQueretaroService } from './producto-queretaro.service';
import { CreateProductoQueretaroDto } from './dto/create-producto-queretaro.dto';
import { UpdateProductoQueretaroDto } from './dto/update-producto-queretaro.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller('producto-queretaro')
export class ProductoQueretaroController {
  constructor(private readonly productoQueretaroService: ProductoQueretaroService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(@Body() createCatalogoDto: CreateProductoQueretaroDto, @UploadedFile() file: Express.Multer.File) {
    console.log(file);
    if (!file) {
      throw new BadRequestException('No se proporcionó ningún archivo.');
    } 
  
    createCatalogoDto.foto = file.buffer;
    return this.productoQueretaroService.create(createCatalogoDto);
  }

  @Get()
  findAll() {
    return this.productoQueretaroService.findAll();
  }

  @Get('iqms/:iqms1')
  findOneIQMS1(@Param('iqms1') iqms: string) {
    const catalogo =  this.productoQueretaroService.findOneIQMS1(+iqms);
    if (!catalogo) {
      throw new NotFoundException('Producto no encontrado');
    }

    return catalogo;
  }
  @Get('iqms/:iqms2')
  findOneIQMS2(@Param('iqms2') iqms: string) {
    const catalogo =  this.productoQueretaroService.findOneIQMS2(+iqms);
    if (!catalogo) {
      throw new NotFoundException('Producto no encontrado');
    }

    return catalogo;
  }
  @Get('iqms/:iqms3')
  findOneIQMS3(@Param('iqms3') iqms: string) {
    const catalogo =  this.productoQueretaroService.findOneIQMS3(+iqms);
    if (!catalogo) {
      throw new NotFoundException('Producto no encontrado');
    }

    return catalogo;
  }
/*
  @Get('iqms-two/:iqms1/:iqms2')
  async findOneIQMS_1_2(@Param('iqms1') iqms1: string, @Param('iqms2') iqms2: string) {
    const catalogo = this.productoQueretaroService.findOneIQMS_1_2(+iqms1, +iqms2);
    if (!catalogo) {
      throw new NotFoundException('Producto no encontrado');
    }
    return catalogo;
  }

  @Get('iqms-two/:iqms1/:iqms3')
  async findOneIQMS_1_3(@Param('iqms1') iqms1: string, @Param('iqms3') iqms3: string) {
    const catalogo = this.productoQueretaroService.findOneIQMS_1_3(+iqms1, +iqms3);
    if (!catalogo) {
      throw new NotFoundException('Producto no encontrado');
    }  
    return catalogo;
  }

  @Get('iqms-two/:iqms2/:iqms3')
  async findOneIQMS_2_3(@Param('iqms2') iqms2: string, @Param('iqms3') iqms3: string) {
    const catalogo = this.productoQueretaroService.findOneIQMS_2_3(+iqms2, +iqms3);
    if (!catalogo) {
      throw new NotFoundException('Producto no encontrado');
    }  
    return catalogo;
  }

  ///producto-queretaro/iqms-search/:iqms1/:iqms2/:iqms3
  @Get('iqms-search/:iqms1/:iqms2/:iqms3')
async findProductByIQMS(@Param('iqms1') iqms1: string, @Param('iqms2') iqms2: string, @Param('iqms3') iqms3: string) {
  const catalogo = this.productoQueretaroService.findProductByIQMS(+iqms1, +iqms2, +iqms3);
  if (!catalogo) {
    throw new NotFoundException('Producto no encontrado');
  }

  return catalogo;
}*/


  @Get('molde/:molde')
  async findOneMolde(@Param('molde') molde: string) {
    return this.productoQueretaroService.findOneMolde1(molde);
  }

  @Put(':iqms')
  update(@Param('iqms') iqms: string, @Body() updateCatalogoDto: UpdateProductoQueretaroDto) {
    return this.productoQueretaroService.update(+iqms, updateCatalogoDto);
  }

  @Delete(':iqms')
  remove(@Param('iqms') iqms: string) {
    return this.productoQueretaroService.remove(+iqms);
  }
}
