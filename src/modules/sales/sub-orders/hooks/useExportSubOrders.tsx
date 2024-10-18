import { useMutation } from '@tanstack/react-query';
import { SubOrderExportService } from 'modules/export/services';
import { SubOrderService } from '../services';

export const useExportSubOrders = (filters: any, search: string, onClose: () => void) => {
  return useMutation(
    (toDriver: boolean) => {
      if (toDriver) return SubOrderExportService.subOrdersExportToExcelForDrivers(filters, search);
      return SubOrderExportService.subOrdersExportToExcel(filters, search);
    },
    {
      onSuccess: () => {
        onClose?.();
      },
    },
  );
};

export const useExportSubOrdersToXML = (filters: any, search: string, onClose: () => void) => {
  return useMutation<any, any, any>(() => SubOrderExportService.subOrdersExportToXML(filters, search), {
    onSuccess: () => {
      onClose?.();
    },
  });
};

export const useExportSubInvoiceOrders = (filters: any, onClose: () => void) => {
  return useMutation<any, any, any>(() => SubOrderService.exportToPDF(filters), {
    onSuccess: () => {
      onClose?.();
    },
  });
};

export const useExportSubOrderTicket = (filters: any, onClose: () => void) => {
  return useMutation<any, any, any>(() => SubOrderService.ticketDeliveryExport(filters), {
    onSuccess: () => {
      onClose?.();
    },
  });
};
