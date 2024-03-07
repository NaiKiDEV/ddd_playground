import { Injectable } from '@nestjs/common';

@Injectable()
class OrderService {
  getTest(): string {
    return 'Order service';
  }
}

export { OrderService };
