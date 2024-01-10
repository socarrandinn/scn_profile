import { IImageMedia } from 'modules/common/interfaces';

export type IUploadImage = IImageMedia & { isLoading?: boolean, isError?: boolean }

export type UploadOptions = {
  maxSize?: number,
  maxFiles?: number,
  multiple?: boolean
}

export type MediaUploaderProps = {
  onSuccess?: () => void;
  onChange?: (data: any) => void;
  name: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;
  uploadOptions?: UploadOptions
};

export type MultipleMediaUploaderProps = MediaUploaderProps & {
  value?: IUploadImage[];
};

export type SingleMediaUploaderProps = MediaUploaderProps & {
  value?: IUploadImage;
};
