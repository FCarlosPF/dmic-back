import {
  BadRequestException,
  Injectable
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import * as bcrypt from 'bcrypt';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { Response, response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register({ email, name, password,role }: RegisterAuthDto) {
    const user = await this.userService.findOneByEmail(email);

    if (user) {
      throw new BadRequestException('User already exist');
    }

     await this.userService.create({
      email,
      name,
      password: await bcrypt.hash(password, 12),
      role
    });

    return {email,name}
  }

    async login({ email, password }: LoginAuthDto, res : Response) {
      const user = await this.userService.findByEmailandPassword(email);

      if (!user) {
        throw new BadRequestException('Invalid Credentials');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        throw new BadRequestException('Password is wrong');
      }

      const payload = { email: user.email, role: user.role};

      const token = await this.jwtService.signAsync(payload);

      res.cookie('token', token, {httpOnly:true})


      return { token, email, role: user.role };
    }

  
  async profile({ email, role }: { email: string; role: string }) {

    return await this.userService.findOneByEmail(email);
  }
}
