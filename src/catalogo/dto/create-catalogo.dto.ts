import { IsString, IsNumber, MinLength  } from 'class-validator';

export class CreateCatalogoDto {
    @IsNumber()
    iqms_aka: number

    @IsNumber()
    iqms_dg: number
    
    @IsString()
    molde: string

    @IsString()
    imagen: string
}
