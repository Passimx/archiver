import { MessageInterface } from './message.interface';
import { VideoInterface } from './video.interface';
import { ThumbInterface } from './thumb.interface';
import { FromInterface } from './from.interface';
import { ForwardOrigin } from './forward-origin.interface';
import { VoiceInterface } from './voice.interface';
import { DocumentInterface } from './document.interface';

export interface InfoInterface {
  readonly date: number;

  readonly edit_date?: number;

  readonly reply_to_message?: MessageInterface;

  readonly left_chat_participant?: FromInterface;

  readonly left_chat_member?: FromInterface;

  readonly new_chat_participant?: FromInterface;

  readonly new_chat_member?: FromInterface;

  readonly document?: DocumentInterface;

  readonly text?: string;

  readonly caption?: string;

  readonly forward_date?: number;

  readonly forward_from?: FromInterface;

  readonly forward_origin?: ForwardOrigin;

  readonly voice?: VoiceInterface;

  readonly photo?: [
    ThumbInterface,
    ThumbInterface,
    ThumbInterface,
    ThumbInterface,
  ];

  readonly video?: VideoInterface;

  readonly reply_markup?: never[];

  readonly data?: string;
}
