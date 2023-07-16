import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('user')
  createUser(@Body() body: CreateUserDTO) {
    return this.usersService.createUser(body);
/*     return("Usuário criado com sucesso") */
  }
}
