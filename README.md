# @passimx/archiver

Simple SDK for archiving Telegram bot events and chats using Telegraf.

## Installation

```bash
npm install @passimx/archiver
```

## Requirements

* Node.js >= 18 (uses native `fetch`)
* `telegraf` >= 4

## Getting API Key
You can obtain an API key via Telegram bot:

[@keep_chats_bot](https://t.me/keep_chats_bot)

Send command:
```text
/verify <your_bot_token>
```
After verification you will receive your **API key**.

### ⚠️ Security recommendation

After connecting, it is strongly recommended to revoke your Telegram bot token via [@BotFather](https://t.me/BotFather):

```text
👉 /revoke (в @BotFather)
```

This will invalidate the old token and protect your bot.

## Usage

```ts
import { Telegraf } from 'telegraf';
import { Archiver } from '@passimx/archiver';

const bot = new Telegraf(process.env.BOT_TOKEN!);

const archiver = new Archiver({
  apiKey: 'YOUR_API_KEY',
  // endpoint is optional
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

* Forwards all incoming Telegram updates to your API
* Intercepts outgoing Telegram API calls (send*, edit*) by patching Telegraf internals
* Sends all events to your backend for storage or processing
* Provides chat export via API


## API

### `new Archiver(options)`

| Option   | Type   | Description             |
| -------- | ------ |-------------------------|
| apiKey   | string | Authorization key       |
| endpoint | string | API base URL (optional) |

If endpoint is not provided, a default value will be used.

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
