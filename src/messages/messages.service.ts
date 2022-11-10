import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message, MessageDocument } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}
  create(createMessageDto: CreateMessageDto): Promise<Message> {
    const createdMessage = new this.messageModel({
      ...createMessageDto,
      date: new Date(),
      images: [],
      isSeen: false,
    });
    return createdMessage.save();
  }

  findAll(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
