import { Injectable } from '@nestjs/common'
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class CronService {

  @Cron(CronExpression.EVERY_MINUTE)
  handleCron() {
    console.log('executa a cada minuto')
  }
}
