import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/orders.dto';
import { Model } from 'mongoose';
import { Orders } from 'src/schemas/order.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Orders.name) private readonly orderModel: Model<Orders>){}
    
    create(createOrderDto: CreateOrderDto) {
        const createdCat = new this.orderModel(createOrderDto);
        return createdCat.save();
    }
}
