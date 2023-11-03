import { Controller, Post, Body, Get, UseGuards, Req, Res} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthGuard } from './guards/auth.guard';
import { Request, Response } from 'express';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guards/roles.guard';
import { Role } from '../common/enums/rol.enum';
import { Auth } from './decorators/auth.decorator';
import { ActiveUser } from '../common/decorators/active-user.decorator';
import { UserActiveInterface } from '../common/interfaces/active-user.interface';


@Controller('auth')
export class AuthController {

    constructor(private readonly authService : AuthService){}

    @Post('register')
    register(@Body() registerAuthDto : RegisterAuthDto){
        return this.authService.register(registerAuthDto)
    }

    @Post('login')
    login(@Body() loginAuthDto : LoginAuthDto, @Res({passthrough:true}) response : Response){
        return this.authService.login(loginAuthDto,response)
    }

    @Get('profile')
    @Auth(Role.USER)
    profile(@ActiveUser() user : UserActiveInterface){
        return this.authService.profile(user)
    }

}
