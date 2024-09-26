import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  private users: CreateUserDto[] = []

  create(createUserDto: CreateUserDto) {
    createUserDto.id = this.users.length + 1
    this.users.push(createUserDto)
    return createUserDto
  }

  findAll() {
    return this.users
  }

  findOne(id: number) {
    console.log(id);
    return this.users.find(user => user.id === id)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.users.find(user => user.id === id)
    const index = this.users.findIndex(user => user.id === id)
    const userUpdated= {...user, ...updateUserDto} as CreateUserDto

    this.users.splice(index, 1, userUpdated)
    return userUpdated
  }

  remove(id: number) {
    const user = this.users.find(user => user.id === id)
    const index = this.users.findIndex(user => user.id === id)
    this.users.splice(index, 1)
    return user
  }
}
