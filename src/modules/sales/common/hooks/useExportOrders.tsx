import { useMutation } from '@tanstack/react-query';
import { OrderExportService } from 'modules/export/services';

export const useExportOrders = (filters: any, search: string, onClose: () => void) => {
  return useMutation<any, any, any>(() => OrderExportService.ordersExportToExcel(filters, search), {
    onSuccess: () => {
      onClose?.();
    },
  });
};

export const useExportSummaryOrders = (filters: any, search: string, onClose: () => void) => {
  return useMutation<any, any, any>(() => OrderExportService.ordersExportToSummaryExcel(filters, search), {
    onSuccess: () => {
      onClose?.();
    },
  });
};

export const useExportOrdersToXML = (filters: any, onClose: () => void, search?: string) => {
  return useMutation<any, any, any>(() => OrderExportService.ordersExportToXML(filters, search), {
    onSuccess: () => {
      onClose?.();
    },
  });
};
