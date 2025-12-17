import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';

import { CreateUserDto } from './dto/CreateUserDto';
import { User } from 'prisma/generated/prisma/client';
import { GetUserDto } from './dto/GetUserDto';

import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createOne(dto: CreateUserDto): Promise<User> {
    const userByEmail = await this.userRepository.findByEmail(dto.email);
    if (userByEmail) {
      throw new ConflictException('User with this email is already existing');
    }

    const createdUser = await this.userRepository.create(dto);

    return createdUser;
  }

  async getOne(dto: GetUserDto): Promise<User | null> {
    const { email, id } = dto;

    if (!email && !id) {
      throw new BadRequestException();
    }

    const user = await this.userRepository.findByIdAndEmail(id, email);

    return user;
  }
}
