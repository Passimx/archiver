import { ThumbInterface } from './thumb.interface';

export interface DocumentInterface {
  readonly file_name: string;

  readonly mime_type: string;

  readonly thumbnail?: DocumentType;

  readonly thumb?: ThumbInterface;

  readonly file_id: string;

  readonly file_unique_id: string;

  readonly file_size: number;
}
