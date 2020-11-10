import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '@src/src/interfaces/user.interface';
import { prefijo } from '../../constantes/index';
import { AppService } from '../../services/app.service';

const urlBasic = `${prefijo}/user`;

@Controller(urlBasic)
export class UserController {
  constructor(private readonly appService: AppService) {}
  // eslint-disable-next-line @typescript-eslint/ban-types
  users: Array<User> = [
    { name: 'duverney', apellido: 'Ortiz', edad: 26, nick: 'Duver' },
    { name: 'mario', apellido: 'Aguilar', edad: 26, nick: 'Mario' },
    { name: 'maria', apellido: 'Fuentes', edad: 19, nick: 'Mary' },
    { name: 'Pedro', apellido: 'Forero', edad: 24, nick: 'Pedris' },
  ];
  @Get()
  // eslint-disable-next-line @typescript-eslint/ban-types
  findAll(): Promise<Array<User>> {
    return this.post(this.users);
  }

  @Post()
  async create(@Body() User: User) {
    return User;
  }

  async post(user: Array<User>) {
    return this.appService.print_user(user);
  }
}
