import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';

import { LocalStrategy } from 'src/strategies/local.strategy';
import { UserModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from 'src/strategies/jwt-access.strategy';

@Module({
  imports: [UserModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
