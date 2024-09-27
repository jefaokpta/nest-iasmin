import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class CronService {

  @Interval(5000)
  handleCron() {
    console.log('executa a cada 5 segundos');
  }
}
