import { IFile } from 'components/FileDropZone/interfaces/IFile';
import { isArray, isEmpty } from 'lodash';

export const onArrayFile = (file: any): IFile[] => {
  if (isArray(file)) {
    return file?.map((f) => f);
  }
  if (isEmpty(file)) {
    return [];
  }
  return [file];
};

export const formatSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} bytes`;
  else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
  else if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  else return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
};

export const getExtension = (mimeType: string): string => {
  if (mimeType) {
    const split = mimeType?.split('.');
    if (split.length > 1) {
      return '.' + split[split.length - 1];
    }

    return '';
  }

  return '';
};

export const getMessageByPath = (data: Record<string, any>, path: string): string | undefined => {
  const keys = path.split('.');
  let value = data;

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return undefined;
    }
  }

  if (typeof value === 'object' && 'message' in value) {
    return value.message;
  } else {
    return undefined;
  }
};

export const mapperFile = (file: IFile) => {
  return {
    originalname: file?.originalname,
    size: file?.size,
    mimetype: file?.mimetype,
    url: file?.url,
  };
};
