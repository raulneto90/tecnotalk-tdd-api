import { getTypeOrmConfig } from '@config/typeorm';
import { User } from '@modules/users/entities/User';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({ ...getTypeOrmConfig(), entities: [User] }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
