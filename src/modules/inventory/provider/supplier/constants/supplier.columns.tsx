import { ProductsRowActions } from 'modules/inventory/provider/supplier/components/SupplierRowActions';
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';
import { addressColumn, createdATColumn } from 'modules/common/constants/common.columns';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants/supplier.permissions';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import CommissionCell from 'modules/inventory/provider/logistics/components/CommissionCell/CommissionCell';
import {
  providerEmailColumn,
  providerPhoneColumn,
  providerNameColumn,
} from 'modules/inventory/provider/common/constants';

export const supplierLogisticsCommissionColumn: HeadCell<ILogistics> = {
  field: 'commission',
  align: CellAlign.CENTER,
  headerName: 'supplier:fields.commission',
  renderCell: (commission: number) => <CommissionCell value={commission} />,
};

export const productsActionsColumn: HeadCell<ISupplier> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: SUPPLIER_PERMISSIONS.SUPPLIER_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: ProductsRowActions,
};

export const supplierColumns: Array<HeadCell<any>> = [
  providerNameColumn,
  providerEmailColumn,
  providerPhoneColumn,
  supplierLogisticsCommissionColumn,
  addressColumn,
  createdATColumn,
  productsActionsColumn
];

// inventory/stores/65820560598abc96a2c2c661/supplier
export const storeSupplierColumns: Array<HeadCell<any>> = [
  ...supplierColumns
];
