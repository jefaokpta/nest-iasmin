import { Module } from '@nestjs/common';
import { HomeController } from './controllers/home.controller';
import { OtherController } from './controllers/other.controller';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [
    OtherController,
    HomeController
  ],
  imports: [UserModule],
})
export class PagesModule {}
