import { useQuery } from '@tanstack/react-query';
import { GET_PATH_FILE } from 'modules/export/constants/queries';
import { ExportRequest, ExportWarehouseProps } from 'modules/export/interfaces/common-export';
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
    () => InventoryDownloadService._getExportPath({ ...payload }, '/providers/export'),
    {
      enabled: !!isOpenModal,
      refetchInterval: second * 1000,
    },
  );
};

// product by supplier export
export const useExportSupplierProducts = ({ isOpenModal, payload, second = 5 }: ExportRequest) => {
  const { providerId, ...rest } = payload;
  return useQuery(
    [GET_PATH_FILE, 'provider-product', payload],
    () =>
      InventoryDownloadService._getExportPath(
        { ...rest },
        `/provider/suppliers/${providerId as string}/products/export`,
      ),
    {
      enabled: !!isOpenModal,
      refetchInterval: second * 1000,
    },
  );
};

// product by logistic export
export const useExportLogisticProducts = ({ isOpenModal, payload, second = 5 }: ExportRequest) => {
  const { providerId, ...rest } = payload;
  return useQuery(
    [GET_PATH_FILE, 'logistic-product', payload],
    () =>
      InventoryDownloadService._getExportPath(
        { ...rest },
        `/provider/logistics/${providerId as string}/products/export`,
      ),
    {
      enabled: !!isOpenModal,
      refetchInterval: second * 1000,
    },
  );
};

// product by warehouse export
export const useExportWarehouseProducts = ({
  isOpenModal,
  payload,
  second = 5,
}: Omit<ExportRequest, 'payload'> & { payload: ExportWarehouseProps }) => {
  const { warehouseId, ...rest } = payload;
  return useQuery(
    [GET_PATH_FILE, 'warehouse-product', payload],
    () => InventoryDownloadService._getExportPath({ ...rest }, `/warehouse/${warehouseId}/products/export`),
    {
      enabled: !!isOpenModal,
      refetchInterval: second * 1000,
    },
  );
};

// warehouse export
export const useExportWarehouses = ({ isOpenModal, payload, second = 5 }: ExportRequest) => {
  return useQuery(
    [GET_PATH_FILE, 'warehouses', payload],
    () => InventoryDownloadService._getExportPath({ ...payload }, '/warehouse/export'),
    {
      enabled: !!isOpenModal,
      refetchInterval: second * 1000,
    },
  );
};

// categories export
export const useExportCategories = ({ isOpenModal, payload, second = 5 }: ExportRequest) => {
  return useQuery(
    [GET_PATH_FILE, 'categories', payload],
    () => InventoryDownloadService._getExportPath({ ...payload }, '/categories/export'),
    {
      enabled: !!isOpenModal,
      refetchInterval: second * 1000,
    },
  );
};
