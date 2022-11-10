import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { BasicAuthGuard } from './auth/basic-auth.guard';
import { BasicStrategy } from './auth/basic.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule],
  controllers: [UsersController],
  providers: [UsersService, BasicStrategy, BasicAuthGuard],
  exports: [UsersService],
})
export class UsersModule {}
