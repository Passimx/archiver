# @passimx/archiver

Simple SDK for archiving Telegram bot events and chats using Telegraf.

## Installation

```bash
npm install @passimx/archiver
```

## Requirements

* Node.js >= 18 (uses native `fetch`)
* `telegraf` >= 4

## Usage

```ts
import { Telegraf } from 'telegraf';
import { Archiver } from '@passimx/archiver';

const bot = new Telegraf(process.env.BOT_TOKEN!);

const archiver = new Archiver({
  apiKey: 'YOUR_API_KEY',
  endpoint: 'https://your-api.com'
});

// Start listening and sending events
archiver.listen(bot);

bot.start((ctx) => ctx.reply('Hello'));
bot.launch();
```

## Export chat

```ts
const chat = await archiver.exportChat(123456);

console.log(chat);
```

## What it does

* Sends all incoming Telegram updates to your API
* Intercepts outgoing messages (`sendMessage`, `editMessageText`)
* Provides chat export via API

## API

### `new Archiver(options)`

| Option   | Type   | Description       |
| -------- | ------ | ----------------- |
| apiKey   | string | Authorization key |
| endpoint | string | API base URL      |

---

### `archiver.listen(bot)`

Starts tracking:

* incoming updates
* outgoing messages

---

### `archiver.exportChat(id)`

Fetches chat data from API.

Returns:

```ts
Promise<ChatInterface | null>
```

## Notes

* This library patches Telegraf internally
* Errors are logged to console
* Make sure your API is available and accepts requests

## License

MIT
