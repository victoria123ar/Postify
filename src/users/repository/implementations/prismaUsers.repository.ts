import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../../dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from '../user.repository';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: CreateUserDTO) {
    return await this.prisma.user.create({ data: data });
  }

  async findUserByEmail(email: string) {
    console.log('Email:', email);
    console.log(await this.prisma.user.findUnique({ where: { email } }));
    return await this.prisma.user.findUnique({ where: { email } });

  }

  async findUserById(id: number) {
    return await this.prisma.user.findUnique({
        where: { id }
    });
}
}