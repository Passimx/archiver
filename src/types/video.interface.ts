import { ThumbInterface } from './thumb.interface';

export interface VideoInterface {
  readonly duration: number;

  readonly width: number;

  readonly height: number;

  readonly file_name: string;

  readonly mime_type: string;

  readonly thumbnail: ThumbInterface;

  readonly thumb: ThumbInterface;

  readonly file_id: string;

  readonly file_unique_id: string;

  readonly file_size: number;
}
