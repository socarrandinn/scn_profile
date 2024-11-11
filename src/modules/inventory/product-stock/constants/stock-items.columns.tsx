import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import OperationCell from '../components/TableCell/OperationCell';
import { useFindOneProduct } from 'modules/inventory/product/hooks/useFindOneProduct';
import { useFindOneWarehouseArea } from 'modules/inventory/settings/warehouse-area/hooks/useFindOneWarehouseArea';

export const ProductCell = ({ value }: any) => {
  const { data, isLoading } = useFindOneProduct(value);
  if (isLoading) return <>...</>;
  return <AvatarNameCell variant={'rounded'} image={data?.media?.[0]} name={data?.name} secondary={data?.code} />;
};
export const WarehouseAreaCellCell = ({ value }: any) => {
  const { data, isLoading } = useFindOneWarehouseArea(value);
  if (isLoading) return <>...</>;
  return <>{data?.name}</>;
};

export const productOnlyNameColumn: HeadCell = {
  field: 'item',
  headerName: 'product:fields.name',
  component: ProductCell,
  sortable: false,
};

export const warehouseAreaColumn: HeadCell = {
  field: 'warehouseArea',
  headerName: 'warehouseArea:select',
  component: WarehouseAreaCellCell,
  sortable: false,
};

export const operationColumn: HeadCell = {
  field: 'operation',
  headerName: 'stock:fields.operation',
  component: OperationCell,
  sortable: false,
};

export const quantityColumn: HeadCell = {
  field: 'quantity',
  headerName: 'stock:fields.quantity',
  align: CellAlign.CENTER,
  renderCell: (quantity: number) => quantity,
  sortable: false,
};

export const stockItemsColumns = [productOnlyNameColumn, warehouseAreaColumn, operationColumn, quantityColumn];
