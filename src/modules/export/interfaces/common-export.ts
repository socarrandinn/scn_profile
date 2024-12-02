export interface ProductExportProps {
  search?: any;
  filters: any;
  total: number | undefined;
}

export interface ProductExportPayloadProps {
  interval?: string;
  size: number;
  page: number;
  search: string;
  sort?: any
  filters?: any
}
