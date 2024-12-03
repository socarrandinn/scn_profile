import { useMutation } from '@tanstack/react-query';
import { ProductExportService } from 'modules/export/services';

export const useExportProducts = ({ onClose, payload }: { payload: any; onClose?: () => void }) => {
  return useMutation(
    ({ isVariant }: { isVariant: boolean }) =>
      ProductExportService.exportToExcelProduct({ ...payload, variant: isVariant }),
    {
      onSuccess: () => {
        onClose?.();
      },
    },
  );
};

export const useExportSupplierProducts = ({ onClose, payload }: { payload: any; onClose?: () => void }) => {
  return useMutation(
    ({ isVariant }: { isVariant: boolean }) =>
      ProductExportService.exportToExcelSupplierProduct({ ...payload, variant: isVariant }),
    {
      onSuccess: () => {
        onClose?.();
      },
    },
  );
};
