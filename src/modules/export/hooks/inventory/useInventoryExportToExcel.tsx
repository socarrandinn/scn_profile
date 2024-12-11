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

export const useExportSuppliers = ({ onClose, payload }: { payload: any; onClose?: () => void }) => {
  return useMutation(() => ProductExportService.exportToExcelSupplier({ ...payload }), {
    onSuccess: () => {
      onClose?.();
    },
  });
};

// export product to supplier
export const useExportSupplierProducts = ({ onClose, payload }: { payload: any; onClose?: () => void }) => {
  return useMutation(() => ProductExportService.exportToExcelSupplierProduct({ ...payload }), {
    onSuccess: () => {
      onClose?.();
    },
  });
};

// export products to logistic
export const useExportLogisticProducts = ({ onClose, payload }: { payload: any; onClose?: () => void }) => {
  return useMutation(() => ProductExportService.exportToExcelSupplierProduct({ ...payload }), {
    onSuccess: () => {
      onClose?.();
    },
  });
};
