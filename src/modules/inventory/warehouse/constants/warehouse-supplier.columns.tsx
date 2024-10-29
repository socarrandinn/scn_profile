import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { ProviderCell } from 'modules/inventory/provider/common/components';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import { PhoneValue } from 'components/libs/PhoneValue';
import { ProviderAvatarCell } from 'modules/inventory/provider/common/components/ProviderAvatarCell';
import { PercentValue } from 'components/libs/PercentValue';
import { createdATColumn } from 'modules/common/constants';
import { IWarehouseSupplier } from '../interfaces/IWarehouseSupplier';
import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { WarehouseSupplierRowActions } from '../components/WarehouseSupplierRowActions';
import { WAREHOUSE_PERMISSIONS } from './warehouse.permissions';
import { WarehouseSupplierStatePicker } from '../components/WarehouseSupplierStatePicker';
import { SupplierProvider } from 'modules/inventory/provider/common/constants';

export const warehouseSupplierImageColumn: HeadCell<IWarehouseSupplier> = {
  field: 'supplier.avatar',
  headerName: 'provider:fields.image',
  disablePadding: false,
  sortable: false,
  align: CellAlign.CENTER,

  renderCell: (_, data: any) => (
    <ProviderAvatarCell
      name={data?.supplier?.name}
      image={data?.supplier?.avatar}
      type={data?.supplier.type}
      variant='rounded'
    />
  ),
};

export const warehouseSupplierNameColumn: HeadCell<IWarehouseSupplier> = {
  field: 'supplier.name',
  headerName: 'provider:fields.name',
  disablePadding: false,
  renderCell: (_, data: any) => (
    <ProviderCell
      provider={data?.supplier?._id as string}
      name={data?.supplier?.name}
      image={data?.supplier?.avatar}
      type={SupplierProvider}
      hideImage
    />
  ),
};

export const warehouseSupplierStatusColumn: HeadCell<IWarehouseSupplier> = {
  field: 'visible',
  headerName: 'provider:fields.state',
  align: CellAlign.CENTER,
  component: WarehouseSupplierStatePicker,
};

export const warehouseSupplierCodeColumn: HeadCell<ILogistics> = {
  field: 'code',
  headerName: 'provider:fields.code',
};

export const warehouseSupplierEmailColumn: HeadCell<ILogistics> = {
  field: 'supplier.contacts.mainEmail',
  headerName: 'common:email',
  type: CellType.EMAIL,
};

export const warehouseSupplierPhoneColumn: HeadCell<ILogistics> = {
  field: 'supplier.contacts.mainPhone',
  headerName: 'common:phone',
  type: CellType.PHONE,
  component: PhoneValue,
};

export const warehouseSupplierCommissionColumn: HeadCell<IWarehouseSupplier> = {
  field: 'priceConfig',
  align: CellAlign.CENTER,
  headerName: 'supplier:fields.commission',
  renderCell: (commission: any) => (
    <PercentValue value={commission.value || 0} symbol={commission.type === PriceType.PERCENT ? '%' : '$'} />
  ),
};

export const warehouseSupplierActionsColumn: HeadCell<IWarehouseSupplier> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: WarehouseSupplierRowActions,
};

export const warehouseSupplierColumns: Array<HeadCell<any>> = [
  warehouseSupplierImageColumn,
  warehouseSupplierNameColumn,
  warehouseSupplierEmailColumn,
  warehouseSupplierPhoneColumn,
  warehouseSupplierCommissionColumn,
  warehouseSupplierStatusColumn,
  createdATColumn,
  warehouseSupplierActionsColumn,
];
