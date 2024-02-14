import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';

@Module({
  imports: [],
  controllers: [ServiceController],
  providers: [],
})
export class ServiceModule {}
