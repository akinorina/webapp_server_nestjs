import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ListAllEntities } from './dto/list-all-entities.dto';
import { Like, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto)
  }

  async findAll(query: ListAllEntities) {
    const conditions = { skip: 0, take: 10, where: [] }
    conditions.skip = +query.offset || 0
    conditions.take = +query.limit || 10
    if (query.q) {
      conditions.where = [
        { familyname: Like("%" + query.q + "%") },
        { firstname: Like("%" + query.q + "%") },
        { familynameKana: Like("%" + query.q + "%") },
        { firstnameKana: Like("%" + query.q + "%") },
      ]
    }
    return await this.userRepository.findAndCount(conditions)
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
