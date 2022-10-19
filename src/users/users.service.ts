import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, State } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(createUserDto: CreateUserDto): User {
    const newUser = User.fromProperties({
      id: this.users.length + 1,
      state: State.ACTIVE,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...createUserDto,
    });

    this.users.push(newUser);

    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number) {
    const users = this.users.filter((user: User) => user.id === id);
    if (users.length === 0) {
      throw new NotFoundException('user not found');
    }
    return users[0];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
