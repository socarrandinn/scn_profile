import { ProviderRowActions } from 'modules/inventory/provider/supplier/components/ProviderRowActions';
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { addressColumn, createdATColumn } from 'modules/common/constants/common.columns';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants/supplier.permissions';
import {
  providerEmailColumn,
  providerPhoneColumn,
  providerNameColumn,
  providerImageColumn,
  providerStatusColumn,
} from 'modules/inventory/provider/common/constants';
import { IProvider } from 'modules/inventory/provider/common/interfaces';
import { PercentValue } from 'components/libs/PercentValue';

export const supplierLogisticsCommissionColumn: HeadCell<IProvider> = {
  field: 'commission',
  align: CellAlign.CENTER,
  headerName: 'supplier:fields.commission',
  renderCell: (commission: number) => <PercentValue value={commission || 0} />,
};

export const providersActionsColumn: HeadCell<IProvider> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: SUPPLIER_PERMISSIONS.SUPPLIER_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  renderCell: (_, provider) => <ProviderRowActions provider={provider} />,
};

export const supplierColumns: Array<HeadCell<any>> = [
  providerImageColumn,
  providerNameColumn,
  providerEmailColumn,
  providerPhoneColumn,
  supplierLogisticsCommissionColumn,
  addressColumn,
  providerStatusColumn,
  createdATColumn,
  providersActionsColumn,
];
