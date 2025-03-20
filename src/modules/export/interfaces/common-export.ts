import { ExportStatusEnum } from './export-status.enum';

export interface ExportProps {
  search?: any;
  filters: any;
  total?: number;
  variant?: boolean;
}
export interface ExportProviderProps extends ExportProps {
  providerId: string;
  name: string;
}
export interface ExportWarehouseProps extends ExportProps {
  warehouseId: string;
  name: string;
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
  payload: Partial<ExportProviderProps>;
  isOpenModal: boolean;
  second?: number;
}
