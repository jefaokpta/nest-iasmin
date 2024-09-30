import { Controller, Get, Render } from '@nestjs/common';

@Controller('other')
export class OtherController {

  @Get()
  @Render('home')
  load() {
    return { name: 'Teste testano' };
  }

}
