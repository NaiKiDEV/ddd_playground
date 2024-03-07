import { Controller, Get } from '@nestjs/common';
import { OrderService } from '../infrastructure';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/')
  get(): string {
    return this.orderService.getTest();
  }
}
