import { Injectable } from '@nestjs/common';
import { Session } from './entity/Session';

@Injectable()
export class SessionsService {
    sessions = [];

    createSession({ email, password }: Session) {
      const session = new Session(email, password);
      return this.sessions.push(session);
    }
}
