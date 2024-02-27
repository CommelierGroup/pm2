import { Inject, Injectable, OnModuleInit } from '@nestjs/common'
import { Answer, Service } from '../../proto/service'
import { ClientGrpc } from '@nestjs/microservices'


@Injectable()
export class AppService implements OnModuleInit {
  constructor(@Inject('SERVICE_PACKAGE') private client: ClientGrpc) {
  }

  private serviceController: Service

  onModuleInit(): any {
    this.serviceController = this.client.getService<Service>('Service')
  }

  getRoot(): string {
    return 'This is Root'
  }

  async callServiceApp(): Promise<Answer> {
    return await this.serviceController.Hello({})
  }
}
