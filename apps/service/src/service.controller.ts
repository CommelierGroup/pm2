import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { Answer, Empty, Service } from '../../proto/service'

@Controller()
export class ServiceController {
  constructor() {
  }

  @GrpcMethod('Service')
  Hello(request: Empty): Answer {
    return { answer: 'This is Service' }
  }
}
