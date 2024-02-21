import { NestFactory } from '@nestjs/core'
import { ServiceModule } from './service.module'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { join } from 'path'


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(ServiceModule, {
    transport: Transport.GRPC,
    options: {
      package: 'service',
      protoPath: join(__dirname, './service.proto'),
      url: process.env.SERVICE_ENDPOINT,
    },
  })
  await app.listen()
}

bootstrap().catch(console.error)
