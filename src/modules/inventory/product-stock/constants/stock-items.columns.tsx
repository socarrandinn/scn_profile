import { HeadCell } from '@dfl/mui-admin-layout';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { IProduct } from 'modules/inventory/common/interfaces';
import { IWarehouseArea } from 'modules/inventory/settings/warehouse-area/interfaces';
import OperationCell from '../components/TableCell/OperationCell';

export const productOnlyNameColumn: HeadCell = {
  field: 'product.media',
  headerName: 'product:fields.name',
  renderCell: (name: string, data: IProduct) => (
    <AvatarNameCell variant={'rounded'} image={data.media?.[0]} name={data.name} secondary={data?.code} />
  ),
};

export const warehouseAreaColumn: HeadCell = {
  field: 'warehouseArea',
  headerName: 'warehouseArea:select',
  renderCell: (warehouseArea: IWarehouseArea) => warehouseArea?.name,
};

export const operationColumn: HeadCell = {
  field: 'warehouseArea',
  headerName: 'stock:fields.operation',
  component: OperationCell,
};

export const stockItemsColumns = [productOnlyNameColumn, warehouseAreaColumn, operationColumn];
