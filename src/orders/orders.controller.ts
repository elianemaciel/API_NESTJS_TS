import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/orders.dto';

@Controller('orders')
export class OrdersController {

    constructor(private readonly orderService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    this.orderService.create(createOrderDto);
  }
}
