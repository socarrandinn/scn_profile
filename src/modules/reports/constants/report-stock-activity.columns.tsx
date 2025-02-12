import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import StockOperationCell from '../components/common/StockOperationCell/StockOperationCell';
import { IReportStockActivity } from '../interfaces/IReportStockActivity';
import { createdATColumn } from 'modules/common/constants';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import StockWarehouseCell from '../components/common/StockWarehouseCell/StockWarehouseCell';

export const operationColumn: HeadCell<IReportStockActivity> = {
  field: 'operation',
  headerName: 'report:report.inventory.activity.operation',
  renderCell: (operation: string) => <StockOperationCell operation={operation} />,
  align: CellAlign.CENTER,
};
export const warehouseStockColumn: HeadCell<IReportStockActivity> = {
  field: 'warehouse',
  headerName: 'report:report.inventory.activity.warehouse',
  renderCell: (warehouse: string) => <StockWarehouseCell warehouse={warehouse} />,
};

export const quantityColumn: HeadCell<IReportStockActivity> = {
  field: 'quantity',
  headerName: 'report:report.inventory.activity.quantity',
  align: CellAlign.CENTER,
};

export const userColumn: HeadCell<IReportStockActivity> = {
  field: 'user',
  headerName: 'report:report.inventory.activity.user',
  renderCell: (user: IReportStockActivity['user']) => (
    <AvatarNameCell
      name={user?.fullName}
      secondary={user?.email}
      link={`/crm/clients/${user?.userId}/general`}
      hideImage
    />
  ),
};

export const reportStockActivityColumns: Array<HeadCell<any>> = [
  operationColumn,
  quantityColumn,
  userColumn,
  warehouseStockColumn,
  createdATColumn,
];
