import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'service',
          protoPath: join(__dirname, './service.proto'),
          url: process.env.SERVICE_ENDPOINT,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
