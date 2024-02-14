import { Controller, Get } from '@nestjs/common';

@Controller()
export class ServiceController {
  constructor() {
  }

  @Get()
  getHello(): string {
    return 'hi';
  }
}
