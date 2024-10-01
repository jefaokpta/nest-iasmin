import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { CronModule } from './cron/cron.module';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { ConfigModule } from '@nestjs/config';
import { MysqlConfigService } from '../config/mysql.config.service';

@Module({
  imports: [

    ScheduleModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: MysqlConfigService,
      inject: [MysqlConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UserModule,
    CronModule,
    AuthModule,
    PagesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    console.log('🚀 conectado ao banco', dataSource.options.database);
  }
}
