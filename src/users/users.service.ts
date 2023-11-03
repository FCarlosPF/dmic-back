import { Injectable, NotFoundException  } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private readonly userRepository : Repository<User>){}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto)
  }

  findOneById(id:number){
    return this.userRepository.findOneBy({id})
  }

  findOneByEmail(email:string){
    return this.userRepository.findOneBy({email})
  }
  
  findByEmailandPassword(email:string){
    return this.userRepository.findOne({
      where:{
        email
      },
      select: ['id','email','name','password','role']
    })
  }

  findAll(){
    return this.userRepository.find();
  }

  update(updateUserDto : UpdateUserDto, id: number){
    return  this.userRepository.update(id,updateUserDto)
  }

  async delete(id : number){
    const user = await this.userRepository.findOne({
      where:{
        id
      }
    })
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }
    return await this.userRepository.remove(user);

  }

}
