import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { PrismaService } from 'prisma/prisma.service';
import { UserRepository } from './user.repository';


@Module({
  imports: [],
  controllers: [],
  providers: [UserService, PrismaService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
