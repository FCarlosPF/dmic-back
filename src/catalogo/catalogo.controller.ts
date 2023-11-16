import { Controller, Get, Post, Body, Put , Param, Delete } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Controller('catalogo')
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

  @Get(':iqms')
  findOne(@Param('iqms') iqms: string) {
    return this.catalogoService.findOne(+iqms);
  }

  @Put(':iqms')
  update(@Param('iqms') iqms: string, @Body() updateCatalogoDto: UpdateCatalogoDto) {
    return this.catalogoService.update(+iqms, updateCatalogoDto);
  }

  @Auth(Role.ADMIN)
  @Delete(':iqms')
  remove(@Param('iqms') iqms: string) {
    return this.catalogoService.remove(+iqms);
  }
}
