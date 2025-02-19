import { HeadCell } from '@dfl/mui-admin-layout';
import { Typography } from '@mui/material';
import { CostCellByUnit } from '../components/CostCellByUnit';

export const costBaseColumn: HeadCell = {
  field: 'price',
  headerName: 'homeDelivery:fields.price',
  maxWidth: 150,
  renderCell: (value, data) => <Typography>$ {value}</Typography>
};

export const weightCostColumn: HeadCell = {
  field: 'weightPrice.price',
  headerName: 'homeDelivery:fields.weightPrice',
  maxWidth: 150,
  renderCell: (value, data) => <CostCellByUnit value={data.weightPrice} unit='kg' />
};

export const volumeCostColumn: HeadCell = {
  field: 'volumePrice.price',
  headerName: 'homeDelivery:fields.volumePrice',
  maxWidth: 150,
  renderCell: (value, data) => <CostCellByUnit value={data.volumePrice} unit='m³' />
};

export const shippingColumns: HeadCell[] = [

];

export const shippingCostColumns: HeadCell[] = [
  costBaseColumn,
  weightCostColumn,
  volumeCostColumn
]