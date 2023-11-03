import { Transform } from "class-transformer"
import { IsString, IsEmail, MinLength} from "class-validator"

export class LoginAuthDto{
    @IsEmail()
    email : string

    @Transform(({value})=>value.trim())
    @IsString()
    @MinLength(1)
    password : string
}