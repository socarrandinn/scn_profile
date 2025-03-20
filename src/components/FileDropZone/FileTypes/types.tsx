import { TYPE_DROP } from '../FileDropZone';

export interface IFileProps {
  fields: any[];
  isUploading: boolean;
  remove: any;
  open: any;
  maxFiles?: number;
  type: TYPE_DROP;
  documentName?: string;
  actions: {
    isDelete?: boolean;
    isDownload?: boolean;
  };
}
