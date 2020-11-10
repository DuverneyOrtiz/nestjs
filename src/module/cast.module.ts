import { Module } from '@nestjs/common';
import { UserController } from '../controller/user/user.controller';
import { AppService } from '../services/app.service';

@Module({
  controllers: [UserController],
  providers: [AppService],
})
export class CastModule {}
