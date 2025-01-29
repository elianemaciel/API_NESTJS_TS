import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Orders, OrderSchema } from 'src/schemas/order.schema';

@Module({
  imports: [MongooseModule.forFeature([{name : Orders.name, schema: OrderSchema}])],
  providers: [OrdersService],
  controllers: [OrdersController],
  exports: [OrdersModule]
})
export class OrdersModule {}
