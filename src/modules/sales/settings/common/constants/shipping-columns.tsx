import { HeadCell } from '@dfl/mui-admin-layout';
import { TimeCell } from '../components/TimeCell';
import LocationCell from 'modules/common/components/LocationCell/LocationCell';
import { IDelivery, ILocation } from 'modules/sales/settings/common/interfaces'
import { CurrencyValue } from '@dfl/mui-react-common';
import { CostCell } from '../components/CostCell';

export const locationColumn: HeadCell = {
  field: 'location.type',
  headerName: 'homeDelivery:destinations',
  width: 200,
  disablePadding: true,
  renderCell: (value, data: IDelivery) => <LocationCell location={data?.location as ILocation} />
};

export const costBaseColumn = (field: string, headerName?: string): HeadCell => ({
  field,
  headerName: headerName || 'homeDelivery:fields.price',
  width: 150,
  renderCell: (value, data) => {
    return <CostCell data={data} type={field === 'price' ? 'normal' : 'express'} key={data?._id} />
  }
});

export const weightCostColumn: HeadCell = {
  field: 'weightPrice.price',
  headerName: 'homeDelivery:fields.weightPrice',
  width: 120,
  renderCell: (value, data) => {
    return <CurrencyValue value={data?.weightPrice?.price} currency='$' />
  }
};

export const volumeCostColumn: HeadCell = {
  field: 'volumePrice.price',
  headerName: 'homeDelivery:fields.volumePrice',
  width: 120,
  renderCell: (value, data) => {
    return <CurrencyValue value={data?.volumePrice?.price} currency='$' />
  }
};

export const timeColumn = (headerName?: string): HeadCell => ({
  field: 'time.from',
  headerName: headerName || 'homeDelivery:fields.time',
  width: 100,
  renderCell: (value, data) => <TimeCell data={data} key={data?._id} type='normal' />
});

export const expressTimeColumn = (headerName?: string): HeadCell => ({
  field: 'expressTime.from',
  headerName: headerName || 'homeDelivery:fields.time',
  width: 140,
  renderCell: (value, data) => <TimeCell data={data} key={data?._id} type={'express'} />
});


export const shippingColumns: HeadCell[] = [
  locationColumn,
  costBaseColumn('price'),
  weightCostColumn,
  volumeCostColumn,
  timeColumn(),
];

export const shippingExpressColumns: HeadCell[] = [
  costBaseColumn('expressPrice'),
  expressTimeColumn(),
];
