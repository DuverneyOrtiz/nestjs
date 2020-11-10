import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';

@Injectable()
export class AppService {
  getName(name: string) {
    return `Hello ${name}`;
  }

  print_user(user: Array<User>) {
    return user;
  }
}
