import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import type { Response } from 'express';
import { RegisterDto } from './dto/RegisterDto';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/utils/decorators/current-user.decorator';
import {
  ApiBearerAuth,
  ApiBody,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { LoginResponse, RegisterResponse } from './response';
import { LoginUserDto } from './dto/LoginUserDto';
import { UserResponse } from './dto/UserResponse';
import { AuthService } from './auth.service';
import { UserService } from '../users/users.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @ApiResponse({ status: 200, type: RegisterResponse })
  @ApiBody({ type: RegisterDto })
  @Post('register')
  async register(
    @Body() dto: RegisterDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.authService.register(dto, res);
  }

  @UseGuards(AuthGuard('local'))
  @ApiResponse({ status: 200, type: LoginResponse })
  @ApiBody({ type: LoginUserDto })
  @Post('login')
  async login(
    @CurrentUser('id') userId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.authService.generateTokens(userId, res);
  }

  @UseGuards(AuthGuard('jwt-access'))
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiResponse({ status: 200, type: UserResponse })
  @Get('me')
  async getMyProfile(@CurrentUser('id') userId: string) {
    const user = await this.userService.getOne({ id: userId });

    if (!user) return null;

    return {
      id: user.id,
      username: user.username,
    };
  }
}
