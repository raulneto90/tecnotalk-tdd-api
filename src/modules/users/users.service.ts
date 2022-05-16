import { Inject, Injectable } from '@nestjs/common';

import { UsersRepository } from './repositories/implementations/UsersRepository';
import { IUsersRepository } from './repositories/IUsersRepository';

@Injectable()
export class UserService {
  constructor(
    @Inject(UsersRepository)
    private readonly usersRepository: IUsersRepository,
  ) {}

  async create(): Promise<void> {}
  async delete(): Promise<void> {}
}
