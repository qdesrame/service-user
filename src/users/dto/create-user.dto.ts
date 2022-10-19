import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'newlogin' })
  login: string;
  @ApiProperty({ example: 'email@domain.com' })
  email: string;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;

  constructor(
    login: string,
    email: string,
    firstName: string,
    lastName: string,
  ) {
    this.login = login;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
