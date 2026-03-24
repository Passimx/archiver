import { UserInterface } from './user.interface';
import { InfoInterface } from './info.interface';

export interface MessageInterface {
  readonly id: string;

  readonly messageId: number;

  readonly createdAt: Date;

  readonly info: InfoInterface[];

  readonly user: UserInterface;
}
