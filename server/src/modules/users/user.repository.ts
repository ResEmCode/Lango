import { Injectable } from '@nestjs/common';
import { Prisma, User } from 'prisma/generated/prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findFirst({ where: { email } });
  }

  findByIdAndEmail(id?: string, email?: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        id,
        email,
      },
    });
  }
}
