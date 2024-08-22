import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
  categoryId: Types.ObjectId;

  @Prop({ required: true })
  model: string;

  @Prop({ required: true })
  make: string;

  @Prop({ required: true, unique: true })
  registrationNo: string;

  @Prop()
  color: string;

  @Prop()
  year: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);
