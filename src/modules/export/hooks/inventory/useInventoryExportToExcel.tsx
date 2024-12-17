import { useQuery } from '@tanstack/react-query';
import { GET_PATH_FILE } from 'modules/export/constants/queries';
import { ExportRequest } from 'modules/export/interfaces/common-export';
import { InventoryDownloadService } from 'modules/export/services';

export const useExportProducts = ({ isOpenModal, payload, second = 5 }: ExportRequest) => {
  return useQuery([GET_PATH_FILE, 'products', payload], () => InventoryDownloadService._getExportPath({ ...payload }), {
    enabled: !!isOpenModal,
    refetchInterval: second * 1000,
  });
};

export const useExportSuppliers = ({ isOpenModal, payload, second = 5 }: ExportRequest) => {
  return useQuery(
    [GET_PATH_FILE, 'supplier', payload],
    () => InventoryDownloadService._getExportPath({ ...payload }, '/provider/suppliers/export'),
    {
      enabled: !!isOpenModal,
      refetchInterval: second * 1000,
    },
  );
};

export const useExportSupplierProducts = ({ isOpenModal, payload, second = 5 }: ExportRequest) => {
  const { providerId, ...rest } = payload;
  return useQuery(
    [GET_PATH_FILE, 'provider-product', payload],
    () => InventoryDownloadService._getExportPath({ ...rest }, `/products/${providerId as string}/export`),
    {
      enabled: !!isOpenModal,
      refetchInterval: second * 1000,
    },
  );
};

export const useExportLogisticProducts = ({ isOpenModal, payload, second = 5 }: ExportRequest) => {
  const { providerId, ...rest } = payload;
  return useQuery(
    [GET_PATH_FILE, 'logistic-product', payload],
    () => InventoryDownloadService._getExportPath({ ...rest }, `/products/${providerId as string}/export`),
    {
      enabled: !!isOpenModal,
      refetchInterval: second * 1000,
    },
  );
};
