import { Controller, Get, Render } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller()
export class HomeController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Render('home')
  async load() {
    return {
      name: 'Jefones',
      users: await this.userService.findAll(),
    };
  }
}
