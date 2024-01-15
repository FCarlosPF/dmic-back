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

  @Get('iqms/:iqms')
  findOneIQMS(@Param('iqms') iqms: string) {
    const catalogo =  this.productoQueretaroService.findOneIQMS1(+iqms);
    if (!catalogo) {
      throw new NotFoundException('Producto no encontrado');
    }

    return catalogo;
  }

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
