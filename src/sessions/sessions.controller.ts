import { Body, Controller, Post } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { Session } from './entity/Session';

@Controller()
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post('signin')
  createSession(@Body() body: Session) {
    return this.sessionsService.createSession(body);
  }
}
