import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/orders.dto';
import { Model } from 'mongoose';
import { Orders } from 'src/schemas/order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { HttpService } from '@nestjs/axios';


@Injectable()
export class OrdersService {
    constructor(@InjectModel(Orders.name) private readonly orderModel: Model<Orders>, private readonly httpService: HttpService,){}
    
    async create(createOrderDto: CreateOrderDto) {
        const maxRetries = 3;
        const retryDelay = 1000; // 1 segundo

        for (let i = 0; i < maxRetries; i++) {
            try {
                const response = await this.httpService.post('https://api.outra.com/endpoint', {
                data: createOrderDto,
                });

                if (response.status === 200) {
                    const createdOrder = new this.orderModel(createOrderDto);
                    return await createdOrder.save();
                } else {
                    throw new Error(`Erro ao fazer a chamada para a API: ${response.status}`);
                }
            } catch (error) {
                console.error(`Erro ao criar o pedido (tentativa ${i + 1}/${maxRetries}): ${error.message}`);

                if (i < maxRetries - 1) {
                    await new Promise((resolve) => setTimeout(resolve, retryDelay));
                } else {
                    throw error;
                }
            }
        }
    }
}
