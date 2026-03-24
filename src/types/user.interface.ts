export interface UserInterface {
  readonly id: number;

  readonly isBot: boolean;

  readonly firstName: string;

  readonly userName: string;

  readonly languageCode: 'ru';

  readonly createdAt: Date;
}
