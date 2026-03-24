export interface FromInterface {
  readonly id: number;

  readonly is_bot: boolean;

  readonly first_name: string;

  readonly last_name?: string;

  readonly username?: string;

  readonly language_code?: string;
}
