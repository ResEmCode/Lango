import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';
import { AccountRole } from 'prisma/generated/prisma/enums';

export class RegisterDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  @Length(8, 32)
  email: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Length(6, 16)
  password: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Length(5, 12)
  username: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  avatar: string;
}
