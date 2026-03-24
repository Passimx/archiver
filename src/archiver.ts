import { Telegraf } from 'telegraf';
import { patchTelegram } from './patch';
import { ChatInterface } from './types/chat.interface';
import { ArchiverOptionsInterface } from './types/archiver-options.interface';
import { Envs } from './common/envs';

export class Archiver {
  private apiKey: string;
  private endpoint: string;

  constructor(options: ArchiverOptionsInterface) {
    this.endpoint = options.endpoint ?? Envs.endpoint;
    this.apiKey = options.apiKey;
  }

  public async exportChat(id: number): Promise<ChatInterface | null> {
    return this.exportApiChat(id);
  }

  public listen(bot: Telegraf) {
    patchTelegram((data) => this.postApiAction(data));

    const originalHandleUpdate = bot.handleUpdate.bind(bot);

    bot.handleUpdate = (update, webhookResponse) => {
      void this.postApiAction(update);

      return originalHandleUpdate(update, webhookResponse);
    };
  }

  private exportApiChat(id: number) {
    return fetch(`${this.endpoint}/telegram/chats/${id}/export`, {
      method: 'GET',
      headers: {
        Authorization: this.apiKey,
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json() as Promise<ChatInterface | null>)
      .catch((error) => {
        console.error(error);
        return null;
      });
  }

  private postApiAction(data: any) {
    fetch(`${this.endpoint}/telegram/events`, {
      method: 'POST',
      headers: {
        Authorization: this.apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch(console.error);
  }
}
