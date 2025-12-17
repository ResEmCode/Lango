import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/RegisterDto';
import type { Response } from 'express';

import { AccountRole, User } from 'prisma/generated/prisma/client';
import { UserService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {}

  async register(
    dto: RegisterDto,
    res: Response,
  ): Promise<{
    accessToken: string;
    user: User;
  }> {
    const { password, ...newDto } = dto;
    const salt = await bcrypt.genSalt(10);
    const hashPassword: string = await bcrypt.hash(dto.password, salt);

    const result = { ...newDto, hashPassword, role: AccountRole.STANDART };

    const createdUser = await this.userService.createOne(result);

    const accessToken = await this.generateTokens(createdUser.id, res);

    return {
      accessToken,
      user: createdUser,
    };
  }

  async generateTokens(userId: string, res: Response) {
    const accessToken = await this.jwtService.signAsync(
      { userId },
      {
        secret: this.configService.getOrThrow('JWT_ACCESS_SECRET'),
        expiresIn: this.configService.getOrThrow('JWT_ACCESS_EXPIRES'),
      },
    );

    const refreshToken = await this.jwtService.signAsync(
      { userId },
      {
        secret: this.configService.getOrThrow('JWT_REFRESH_SECRET'),
        expiresIn: this.configService.getOrThrow('JWT_REFRESH_EXPIRES'),
      },
    );

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: false, // Только по HTTPS, установите в true на продакшене (HTTPS - true| HTTP - false)
      sameSite: 'lax',
      path: '/',
    });

    return accessToken;
  }

  async validateUser(email: string, password: string) {
    const userByEmail = await this.userService.getOne({ email });

    if (!userByEmail) {
      return null;
    }

    const isValidPw = await bcrypt.compare(password, userByEmail.hashPassword);

    if (!isValidPw) {
      return null;
    }

    return userByEmail;
  }
}
