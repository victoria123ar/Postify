import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PublicationsModule } from './publications/publications.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, PublicationsModule, AuthModule],
})
export class AppModule {}
