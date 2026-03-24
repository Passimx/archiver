// sdk/patch.ts
import { Telegram } from 'telegraf';

let patched = false;

export function patchTelegram(send: (data: any) => void) {
  if (patched) return;
  patched = true;

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const originalCall = Telegram.prototype.callApi;

  // @ts-expect-error override telegraf internal method
  Telegram.prototype.callApi = async function (method, payload, ...rest) {
    const result = await originalCall.call(this, method, payload, ...rest);

    if (method.includes('send')) send({ message: result });
    else if (method.includes('edit')) send({ edited_message: result });

    return result;
  };
}
