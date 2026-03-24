import { ChatTypeEnum } from './chat-type.enum';
import { MessageInterface } from './message.interface';

export interface ChatInterface {
  readonly id: number;

  readonly title: string;

  readonly type: ChatTypeEnum;

  readonly message?: MessageInterface[];
}
