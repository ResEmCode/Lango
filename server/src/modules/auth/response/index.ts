import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RegisterResponse {
  @ApiProperty()
  @IsString()
  token: string;
}

export class LoginResponse {
  @ApiProperty()
  @IsString()
  token: string;
}
