import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtUser } from './jwt.strategy';
import { AuthService } from './auth.service';
import { LocalUser } from './local.stategy';
import { User } from 'src/users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Req() req: Request): Promise<any> {
    return this.authService.login(req.user as LocalUser);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getLoggedIn(@Req() req: Request): Promise<User> {
    return this.userService.findOne((req.user as JwtUser).id);
  }
}
