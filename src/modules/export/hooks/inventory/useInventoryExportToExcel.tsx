import { useMutation, useQuery } from '@tanstack/react-query';
import { GET_PATH_FILE } from 'modules/export/constants/queries';
import { ExportRequest } from 'modules/export/interfaces/common-export';
import { InventoryDownloadService, ProductExportService } from 'modules/export/services';

export const useExportProducts = ({ isOpenModal, payload, second = 5 }: ExportRequest) => {
  return useQuery([GET_PATH_FILE], () => InventoryDownloadService._getExportPath({ ...payload }), {
    enabled: !!isOpenModal,
    refetchInterval: second * 1000,
  });
};

export const useExportSuppliers = ({ isOpenModal, payload, second = 5 }: ExportRequest) => {
  return useQuery(
    [GET_PATH_FILE],
    () => InventoryDownloadService._getExportPath({ ...payload }, '/provider/suppliers/export'),
    {
      enabled: !!isOpenModal,
      refetchInterval: second * 1000,
    },
  );
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
