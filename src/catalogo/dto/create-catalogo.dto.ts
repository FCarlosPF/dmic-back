import { IsString, IsNumber, MinLength, IsOptional  } from 'class-validator';

export class CreateCatalogoDto {
    @IsNumber()
    iqms: number

    @IsString()
    @MinLength(3)
    familia: string
    
    @IsString()
    molde: string

    @IsString()
    imagen: string
}
