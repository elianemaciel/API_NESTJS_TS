import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

 @Schema({ collection: 'orders' })
 export class Orders {
   @Prop({ required: true })
   numero: number;
   @Prop({ required: true })
   cliente: string;
   @Prop({ required: true })
   total_amount: number;
   @Prop({ required: true })
   created_at: Date;
   @Prop({ required: false })
   update_at: Date;
 }
 export const OrderSchema = SchemaFactory.createForClass(Orders)