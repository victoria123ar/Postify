import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from 'src/users/repository/user.repository';
import { JwtService } from '@nestjs/jwt';
import { AuthSigninDTO } from './dto/auth-login.dto';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  private AUDIENCE = 'users';
  private ISSUER = 'Driven';

  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login({ email, password }: AuthSigninDTO) {
    const user = await this.usersRepository.findUserByEmail(email);
    if (!user) throw new UnauthorizedException('Email ou senha inválidos');

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword)
      throw new UnauthorizedException('Email ou senha inválidos');
console.log(validPassword)
console.log(user)
    return this.createToken(user);
  }

  createToken(user: User) {
    const token = this.jwtService.sign(
      {
        name: user.name,
        email: user.email,
      },
      {
        expiresIn: '1 day',
        subject: String(user.id),
        issuer: this.ISSUER,
        audience: this.AUDIENCE,
      },
    );

    return { token };
  }

  checkToken(token: string) {
    try {
      const data = this.jwtService.verify(token, {
        issuer: this.ISSUER,
        audience: this.AUDIENCE,
      });

      return data;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }
}
