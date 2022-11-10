import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LocalUser } from './local.stategy';
import { JwtPayload } from './jwt.strategy';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  async login(user: LocalUser) {
    const payload: JwtPayload = { username: user.email, sub: `${user.id}` };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
