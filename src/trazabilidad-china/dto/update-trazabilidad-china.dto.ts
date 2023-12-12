import { PartialType } from '@nestjs/mapped-types';
import { CreateTrazabilidadChinaDto } from './create-trazabilidad-china.dto';

export class UpdateTrazabilidadChinaDto extends PartialType(CreateTrazabilidadChinaDto) {}
