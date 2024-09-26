import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'jefao',
      password: 'jefao',
      database: 'iasmin',
      autoLoadEntities: true,
      synchronize: true,
      logging: true
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    console.log('🚀 conectado ao banco', dataSource.options.database);
  }
}
