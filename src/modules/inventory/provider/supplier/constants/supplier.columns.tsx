import { ProviderRowActions } from 'modules/inventory/provider/supplier/components/ProviderRowActions';
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { addressColumn, createdATColumn } from 'modules/common/constants/common.columns';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants/supplier.permissions';
import {
  providerEmailColumn,
  providerPhoneColumn,
  providerImageColumn,
} from 'modules/inventory/provider/common/constants';
import { IProvider } from 'modules/inventory/provider/common/interfaces';
import { PercentValue } from 'components/libs/PercentValue';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { ProviderStatePicker } from '../../common/components';

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

export const supplierOnlyNameColumn: HeadCell = {
  field: 'media',
  headerName: 'product:fields.name',
  renderCell: (name: string, data: IProvider) => (
    <AvatarNameCell link={`/inventory/settings/suppliers/${data?._id as string}/general`} hideImage name={data.name} />
  ),
};

export const supplierStatusColumn: HeadCell<IProvider> = {
  field: 'visible',
  headerName: 'common:fields.visible.title',
  align: CellAlign.CENTER,
  renderCell: (visible: boolean, data: IProvider) => (
    <ProviderStatePicker
      rowId={data._id as string}
      value={visible}
      record={data}
      permissions={SUPPLIER_PERMISSIONS.SUPPLIER_WRITE}
    />
  ),
};

export const supplierColumns: Array<HeadCell<any>> = [
  providerImageColumn,
  supplierOnlyNameColumn,
  providerEmailColumn,
  providerPhoneColumn,
  supplierLogisticsCommissionColumn,
  addressColumn,
  supplierStatusColumn,
  createdATColumn,
  providersActionsColumn,
];
