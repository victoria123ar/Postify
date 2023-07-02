import { Injectable } from '@nestjs/common';
import { User } from './entity/User';

@Injectable()
export class UsersService {
  users = [];

  createUser({ name, email, password, avatar }: User) {
    const user = new User(name, email, password, avatar);
    return this.users.push(user);
  }
}
