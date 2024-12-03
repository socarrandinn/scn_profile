export interface ExportProps {
  search?: any;
  filters: any;
  total?: number;
  variant?: boolean;
}
export interface ExportProviderProps extends ExportProps {
  providerId: string;
}
