import { IsString, IsNumber, MinLength, IsOptional, IsNotEmpty  } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateProductoQueretaroDto {

    @IsNumber()
    @Type(() => Number)
    iqms1: number

    @IsNumber()
    @Type(() => Number)
    iqms2: number

    @IsNumber()
    @Type(() => Number)
    iqms3: number

    @IsString()
    @MinLength(3)
    familia: string
    
    @IsString()
    molde1: string

    @IsString()
    molde2: string

    @IsNotEmpty()
    foto: Buffer
}
