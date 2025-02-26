import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { Typography } from '@mui/material';
import { CostCellByUnit } from '../components/CostCellByUnit';
import { TimeCell } from '../components/TimeCell';
import LocationCell from 'modules/common/components/LocationCell/LocationCell';
import { DELIVERY_SERVICE, IDelivery, ILocation } from '../../home-delivery/interfaces';
import GlobalCell from 'modules/sales/common/components/GlobalCell/GlobalCell';

export const locationColumn: HeadCell = {
  field: 'location.type',
  headerName: 'homeDelivery:destinations',
  width: 150,
  disablePadding: true,
  renderCell: (value, data: IDelivery) => <LocationCell location={data?.location as ILocation} />
};

export const costBaseColumn: HeadCell = {
  field: 'price',
  headerName: 'homeDelivery:fields.price',
  width: 100,
  renderCell: (value, data) => <Typography>${value}</Typography>
};

export const weightCostColumn: HeadCell = {
  field: 'weightPrice.price',
  headerName: 'homeDelivery:fields.weightPrice',
  width: 120,
  renderCell: (value, data) => <CostCellByUnit value={data.weightPrice} unit='kg' />
};

export const volumeCostColumn: HeadCell = {
  field: 'volumePrice.price',
  headerName: 'homeDelivery:fields.volumePrice',
  width: 120,
  renderCell: (value, data) => <CostCellByUnit value={data.volumePrice} unit='m³' />
};

export const timeColumn: HeadCell = {
  field: 'time.from',
  headerName: 'homeDelivery:fields.time',
  width: 150,
  renderCell: (value, data) => <TimeCell time={data.time} />
};

export const globalColumn = (apiPath: DELIVERY_SERVICE): HeadCell => ({
  field: 'global',
  width: 200,
  disablePadding: true,
  renderCell: (value, data) => <GlobalCell data={data} service={apiPath} />
});

export const shippingColumns: HeadCell[] = [
  locationColumn,
  costBaseColumn,
  weightCostColumn,
  volumeCostColumn,
  timeColumn,
];

export const shippingCostColumns: HeadCell[] = [
  costBaseColumn,
  weightCostColumn,
  volumeCostColumn,
];
