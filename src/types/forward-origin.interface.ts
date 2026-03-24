import { FromInterface } from './from.interface';

export interface ForwardOrigin {
  readonly date: number;

  readonly type: string;

  readonly sender_user: FromInterface;
}
