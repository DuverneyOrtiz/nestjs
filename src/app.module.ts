import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './services/app.service';
import { CastModule } from './module/cast.module';

@Module({
  imports: [CastModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
