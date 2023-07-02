import { randomUUID } from "crypto";

export class Session {
  constructor(
    private _email: string,
    private _password: string,
    private readonly id: string = randomUUID(),
    private readonly token: string = randomUUID(),
  ) {}

  set email(email: string) {
    this._email = email;
  }
  get email() {
    return this._email;
  }

  set password(password: string) {
    this._password = password;
  }
  get password() {
    return this._password;
  }
}
