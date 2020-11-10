import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { prefijo } from '../constantes';

@Controller(prefijo)
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('app/:name')
  findAll(@Param() params): string {
    return this.appService.getName(params.name);
  }
}
