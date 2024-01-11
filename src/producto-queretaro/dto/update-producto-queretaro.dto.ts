import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoQueretaroDto } from './create-producto-queretaro.dto';

export class UpdateProductoQueretaroDto extends PartialType(CreateProductoQueretaroDto) {}
