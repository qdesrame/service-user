import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { LocalStrategy } from './auth/local.stategy';
import { PassportModule } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule],
  controllers: [UsersController],
  providers: [UsersService, LocalStrategy, LocalAuthGuard],
})
export class UsersModule {}
