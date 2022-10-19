import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: UserDto,
  })
  async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    const user = await this.usersService.create(createUserDto);
    return new UserDto(user);
  }

  @Get()
  @ApiOkResponse({
    description: 'List of users',
    type: [UserDto],
  })
  async findAll(): Promise<UserDto[]> {
    const users = await this.usersService.findAll();
    return users.map((user) => new UserDto(user));
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The user',
    type: UserDto,
  })
  @ApiNotFoundResponse({
    description: 'User not found',
  })
  async findOne(@Param('id') id: string): Promise<UserDto> {
    const user = await this.usersService.findOne(+id);
    return new UserDto(user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiNoContentResponse({
    description: 'Successful deletion',
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
