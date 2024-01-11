import { IsString, IsNumber, MinLength, IsOptional  } from 'class-validator';

export class CreateProductoQueretaroDto {

    @IsNumber()
    iqms1: number

    @IsNumber()
    iqms2: number

    @IsNumber()
    iqms3: number

    @IsString()
    @MinLength(3)
    familia: string
    
    @IsString()
    molde1: string

    @IsString()
    molde2: string

    @IsString()
    foto: string
}
