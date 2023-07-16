import { Module } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { PublicationsController } from './publications.controller';
import { PublicationsRepository } from './repository/publication.repository';
import { PrismaPublicationsRepository } from './repository/implemantations/prismaPublications.repository';
import { PrismaUsersRepository } from 'src/users/repository/implementations/prismaUsers.repository';
import { UsersRepository } from 'src/users/repository/user.repository';
import { UsersService } from 'src/users/users.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
        secret: process.env.JWT_SECRET,
    }),
],
controllers: [PublicationsController],
providers: [PublicationsService,
    AuthService,
    UsersService,
    {
        provide: PublicationsRepository,
        useClass: PrismaPublicationsRepository,
    },
    {
        provide: UsersRepository,
        useClass: PrismaUsersRepository,
    }
],
exports: [
    PublicationsService,
    {
        provide: PublicationsRepository,
        useClass: PrismaPublicationsRepository,
    }
]
})
export class PublicationsModule {}
