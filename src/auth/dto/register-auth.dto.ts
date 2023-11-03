import { Transform } from "class-transformer"
import { IsString, IsEmail, MinLength, IsOptional} from "class-validator"

export class RegisterAuthDto {
    
    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(1)
    @IsOptional()
    name?: string

    @IsEmail()
    email: string

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(1)
    password: string

    @IsString()
    @IsOptional()
    role?: string
}