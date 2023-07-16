import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSigninDTO } from './dto/auth-login.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async login(@Body() body: AuthSigninDTO) {
    return this.authService.login(body);
  }
}
