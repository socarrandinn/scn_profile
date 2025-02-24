import { HeadCell } from '@dfl/mui-admin-layout';
import { Typography } from '@mui/material';
import { CostCellByUnit } from '../components/CostCellByUnit';
import { TimeCell } from '../components/TimeCell';
import LocationCell from 'modules/common/components/LocationCell/LocationCell';
import { IHomeDelivery, ILocation } from '../../home-delivery/interfaces';
import { homeDeliveryActionsColumn } from '../../home-delivery/constants/home-delivery.columns';
import GlobalCell from 'modules/sales/common/components/GlobalCell/GlobalCell';

export const locationColumn: HeadCell = {
  field: 'location.type',
  headerName: 'homeDelivery:destinations',
  maxWidth: 150,
  renderCell: (value, data: IHomeDelivery) => <LocationCell location={data?.location as ILocation} />
};

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

export const globalColumn: HeadCell = {
  field: 'global',
  renderCell: (value, data) => <GlobalCell data={data} />
};

export const shippingColumns: HeadCell[] = [
  locationColumn,
  costBaseColumn,
  weightCostColumn,
  volumeCostColumn,
  timeColumn,
  globalColumn,
  homeDeliveryActionsColumn
];

export const shippingCostColumns: HeadCell[] = [
  costBaseColumn,
  weightCostColumn,
  volumeCostColumn,
];
