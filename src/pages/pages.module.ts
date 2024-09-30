import { Module } from '@nestjs/common';
import { HomeController } from './controllers/home.controller';
import { OtherController } from './controllers/other.controller';
import { UserModule } from '../user/user.module';
import { VuejsController } from './controllers/vuejs.controller';

@Module({
  controllers: [
    OtherController,
    HomeController,
    VuejsController
  ],
  imports: [UserModule],
})
export class PagesModule {}
