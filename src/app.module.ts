import { Module } from '@nestjs/common';
import { OrderController } from './application';
import { OrderService } from './infrastructure';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [OrderService],
})
export class AppModule {}
