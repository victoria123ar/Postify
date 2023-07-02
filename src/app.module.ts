import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SessionsModule } from './sessions/sessions.module';
import { PublicationsModule } from './publications/publications.module';

@Module({
  imports: [UsersModule, SessionsModule, PublicationsModule],
})
export class AppModule {}
