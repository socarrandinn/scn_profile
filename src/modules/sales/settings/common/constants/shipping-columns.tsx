import { HeadCell } from '@dfl/mui-admin-layout';
import { Typography } from '@mui/material';
import { CostCellByUnit } from '../components/CostCellByUnit';
import { TimeCell } from '../components/TimeCell';
import LocationCell from 'modules/common/components/LocationCell/LocationCell';
import { IDelivery, ILocation } from 'modules/sales/settings/common/interfaces'

export const locationColumn: HeadCell = {
  field: 'location.type',
  headerName: 'homeDelivery:destinations',
  width: 150,
  disablePadding: true,
  renderCell: (value, data: IDelivery) => <LocationCell location={data?.location as ILocation} />
};

export const costBaseColumn = (field: string): HeadCell => ({
  field,
  headerName: 'homeDelivery:fields.price',
  width: 100,
  renderCell: (value, data) => <Typography>${value}</Typography>
});

export const weightCostColumn: HeadCell = {
  field: 'weightPrice.price',
  headerName: 'homeDelivery:fields.weightPrice',
  width: 120,
  renderCell: (value, data) => <CostCellByUnit value={data?.weightPrice} unit='kg' />
};

export const volumeCostColumn: HeadCell = {
  field: 'volumePrice.price',
  headerName: 'homeDelivery:fields.volumePrice',
  width: 120,
  renderCell: (value, data) => <CostCellByUnit value={data?.volumePrice} unit='m³' />
};

export const timeColumn = (field: string): HeadCell => ({
  field,
  headerName: 'homeDelivery:fields.time',
  width: 150,
  renderCell: (value, data) => <TimeCell time={data?.time} />
});

export const shippingColumns: HeadCell[] = [
  locationColumn,
  costBaseColumn('price'),
  weightCostColumn,
  volumeCostColumn,
  timeColumn('time.from'),
];

export const shippingExpressColumns: HeadCell[] = [
  costBaseColumn('expressPrice'),
  timeColumn('expressTime.from'),
];

