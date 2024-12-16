import { ExportStatusEnum } from './export-status.enum';

export interface ExportProps {
  search?: any;
  filters: any;
  total?: number;
  variant?: boolean;
}
export interface ExportProviderProps extends ExportProps {
  providerId: string;
}

export interface ICommonDownload {
  name: string;
  path: string;
}

export interface ExportStatusResponse {
  _id: string;
  status: ExportStatusEnum;
  createdAt?: string;
  jobMetadata?: {
    processedCount: number;
    totalCount: number;
    status: 'COMPLETED' | 'FAILED';
  };
  path?: string;
}

export interface ExportRequest {
  payload: any;
  isOpenModal: boolean;
  second?: number;
}
