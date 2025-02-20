import { HeadCell } from '@dfl/mui-admin-layout';
import { Typography } from '@mui/material';
import { CostCellByUnit } from '../components/CostCellByUnit';
import { TimeCell } from '../components/TimeCell';

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

export const timeColumn: HeadCell = {
  field: 'time.from',
  headerName: 'homeDelivery:fields.time',
  maxWidth: 150,
  renderCell: (value, data) => <TimeCell time={data.time} />
};

export const shippingColumns: HeadCell[] = [
  costBaseColumn,
  weightCostColumn,
  volumeCostColumn,
  timeColumn
];

export const shippingCostColumns: HeadCell[] = [
  costBaseColumn,
  weightCostColumn,
  volumeCostColumn,
]