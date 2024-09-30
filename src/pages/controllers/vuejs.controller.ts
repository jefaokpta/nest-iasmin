import { Controller, Get, Render } from '@nestjs/common';

@Controller('vuejs')
export class VuejsController {

  @Get()
  @Render('vuejs')
  load() {
    return { name: 'Pagina VueJS com PrimeVue' };
  }

}
