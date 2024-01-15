import { Type } from 'class-transformer';
import { IsString, IsNumber, IsInt, MinLength, IsNotEmpty  } from 'class-validator';

export class CreateCatalogoDto {
    @IsNumber()
    @Type(() => Number)
    iqms_aka: number

    @IsNumber()
    @Type(() => Number)
    iqms_dg: number
    
    @IsString()
    molde: string

    @IsNotEmpty()
    imagen: Buffer
}
