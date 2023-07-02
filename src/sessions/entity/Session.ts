export class Session {
  constructor(
    private _email: string,
    private _password: string,
//    private _token: string,
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

//  get token(): string {
//    return this._token;
//  }
//  set token(token: string) {
//    this._token = token;
//  }
}
