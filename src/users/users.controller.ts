import { Controller, Get,Put,Delete,Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { Auth } from '../auth/decorators/auth.decorator';
import { Role } from '../common/enums/rol.enum';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService : UsersService){}

    @Get()
    FindAll(){
        return this.usersService.findAll()
    }

    @Delete(':id')
    Eliminar(@Param('id') id: number){

        return this.usersService.delete(id)

    }

}
