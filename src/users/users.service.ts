import { HttpException, Injectable, HttpStatus, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from './repository/user.repository';
import { LoginDTO } from './dto/login-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(data: CreateUserDTO) {
    const hashPassword = bcrypt.hashSync(data.password, 10);
    const user = await this.usersRepository.findUserByEmail(data.email);

    if (user) throw new HttpException('Usuário existente', HttpStatus.CONFLICT);
    console.log(user)
    console.log(data)
    return await this.usersRepository.createUser({...data, password: hashPassword});
  }

  async findUserById(id: number) {

    const user = await this.usersRepository.findUserById(id);
    if (!user) throw new NotFoundException('User cannot be found');
    return user;

  }

  async login(body: LoginDTO) {

    const user = await this.usersRepository.findUserByEmail(body.email);
    if (!user) throw new UnauthorizedException('Invalid credentials')

    const passwordIsValid = bcrypt.compareSync(body.password, user.password);
    if (!passwordIsValid) throw new UnauthorizedException('Invalid credentials')
    
  }
}
