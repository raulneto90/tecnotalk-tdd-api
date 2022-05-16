import { Controller, Delete, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(): Promise<void> {}

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(): Promise<void> {}
}
