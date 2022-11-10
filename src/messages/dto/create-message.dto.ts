import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty()
  @IsNotEmpty()
  senderId: string;
  @ApiProperty()
  @IsNotEmpty()
  recipientId: string;
  @ApiProperty()
  @IsNotEmpty()
  message: string;

  constructor(senderId: string, recipientId: string, message: string) {
    this.senderId = senderId;
    this.recipientId = recipientId;
    this.message = message;
  }
}
