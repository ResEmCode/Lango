import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';
import { User } from 'prisma/generated/prisma/browser';

interface UserRequest extends Request {
  user: User;
}

export const CurrentUser = createParamDecorator(
  (key: keyof User, ctx: ExecutionContext) => {
    const req: UserRequest = ctx.switchToHttp().getRequest();

    return key ? req.user[key] : req.user;
  },
);
