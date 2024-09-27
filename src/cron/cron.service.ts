import { Injectable } from '@nestjs/common'
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class CronService {

  @Cron(CronExpression.EVERY_5_SECONDS)
  handleCron() {
    console.log('executa a cada 5 segundos')
  }
}
