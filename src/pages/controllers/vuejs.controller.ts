import { Controller, Get, Render } from '@nestjs/common';
import { UserService } from '../../user/user.service';

@Controller('vuejs')
export class VuejsController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Render('vuejs')
  async load() {
    return {
      name: 'Pagina VueJS com PrimeVue',
    };
  }

  @Get('users')
  async users() {
    return await this.userService.findAll();
  }
}
