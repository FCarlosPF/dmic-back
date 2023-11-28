import { IsString, IsNumber, MinLength, IsOptional  } from 'class-validator';

export class CreateCatalogoDto {
    @IsNumber()
    iqms: number

    @IsString()
    @MinLength(3)
    familia: string
    
    @IsString()
    molde: string

    @IsOptional()
    imagen?: Buffer | null
}
