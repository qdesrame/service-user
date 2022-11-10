import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop({ required: true })
  senderId?: string;

  @Prop({ required: true })
  recipientId?: string;

  @Prop()
  message?: string;

  @Prop([String])
  images: string[] = [];

  @Prop({ required: true })
  date: Date = new Date();

  @Prop({ required: true, default: false })
  isSeen: boolean = false;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
