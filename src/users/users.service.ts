import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindallUserDto } from './dto/findall-user.dto';
import { Repository, FindManyOptions, Like } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  defaultOffset: number = 0
  defaultLimit: number = 10

  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto)
  }

  async findAll(query?: FindallUserDto) {
    const options: FindManyOptions<User> = {}
    if (query?.q) {
      console.log('go')
      options.where = []
      options.where.push({firstname: Like("%" + query.q +"%")})
      options.where.push({familyname: Like("%" + query.q +"%")})
      options.where.push({firstnameKana: Like("%" + query.q +"%")})
      options.where.push({familynameKana: Like("%" + query.q +"%")})
      options.where.push({email: Like("%" + query.q +"%")})
    }
    options.skip = query?.offset ?? this.defaultOffset
    options.take = query?.limit ?? this.defaultLimit
    return await this.userRepository.findAndCount(options)
  }

  async findOne(id: number) {
    return await this.userRepository.findOneByOrFail({ id: id })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto)
  }

  async remove(id: number) {
    return await this.userRepository.softDelete(id)
  }
}
