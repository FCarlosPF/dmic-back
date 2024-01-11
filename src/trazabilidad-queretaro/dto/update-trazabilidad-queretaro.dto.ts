import { PartialType } from '@nestjs/mapped-types';
import { CreateTrazabilidadQueretaroDto } from './create-trazabilidad-queretaro.dto';

export class UpdateTrazabilidadQueretaroDto extends PartialType(CreateTrazabilidadQueretaroDto) {}
