export interface VoiceInterface {
  readonly duration: number;

  readonly mime_type: string;

  readonly file_id: string;

  readonly file_unique_id: string;

  readonly file_size: number;
}
