import { PartialType } from '@nestjs/mapped-types';
import { CreateVision1Dto } from './create-vision1.dto';

export class UpdateVision1Dto extends PartialType(CreateVision1Dto) {}
