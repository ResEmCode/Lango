import { AccountRole } from "prisma/generated/prisma/enums";

export class CreateUserDto {
  email: string;
  hashPassword: string;
  username: string;
  avatar: string;
  role: AccountRole;
}
