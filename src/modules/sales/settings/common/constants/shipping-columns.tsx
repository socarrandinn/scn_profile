import { HeadCell } from '@dfl/mui-admin-layout';
import { TimeCell } from '../components/TimeCell';
import LocationCell from 'modules/common/components/LocationCell/LocationCell';
import { IDelivery, ILocation } from 'modules/sales/settings/common/interfaces';
import { CurrencyValue } from '@dfl/mui-react-common';

export const locationColumn: HeadCell = {
  field: 'location.type',
  headerName: 'homeDelivery:destinations',
  width: 170,
  cellClassName: 'min-w-[170px] max-w-[170px]',
  disablePadding: true,
  renderCell: (value, data: IDelivery) => <LocationCell location={data?.location as ILocation} />,
};

export const costBaseColumn: HeadCell = {
  field: 'price',
  headerName: 'homeDelivery:fields.price',
  width: 120,
  cellClassName: 'min-w-[120px] max-w-[120px]',
  renderCell: (value, data) => {
    if (!value) return '-';
    return <CurrencyValue value={value} />;
  },
};

export const weightCostColumn: HeadCell = {
  field: 'weightPrice.price',
  headerName: 'homeDelivery:fields.weightPrice',
  width: 120,
  cellClassName: 'min-w-[120px] max-w-[120px]',
  renderCell: (value, data) => {
    return <CurrencyValue value={data?.weightPrice?.price} currency='$' />;
  },
};

export const volumeCostColumn: HeadCell = {
  field: 'volumePrice.price',
  headerName: 'homeDelivery:fields.volumePrice',
  width: 120,
  cellClassName: 'min-w-[120px] max-w-[120px]',
  renderCell: (value, data) => {
    return <CurrencyValue value={data?.volumePrice?.price} currency='$' />;
  },
};

export const timeColumn = (headerName?: string): HeadCell => ({
  field: 'time.from',
  headerName: headerName || 'homeDelivery:fields.time',
  width: 110,
  cellClassName: 'min-w-[110px] max-w-[110px]',
  renderCell: (value, data) => <TimeCell data={data} key={data?._id} type='normal' />,
});

export const costExpressColumn: HeadCell = {
  field: 'expressPrice',
  headerName: 'homeDelivery:fields.expressCost',
  width: 130,
  cellClassName: 'min-w-[130px] max-w-[130px]',
  renderCell: (value, data: IDelivery) => {
    if (!value || !data?.hasExpress) return '-';
    return <CurrencyValue value={value} />;
  },
};

export const expressTimeColumn = (headerName?: string): HeadCell => ({
  field: 'expressTime.from',
  headerName: headerName || 'homeDelivery:fields.time',
  width: 140,
  cellClassName: 'min-w-[140px] max-w-[140px]',
  renderCell: (value, data) => <TimeCell data={data} key={data?._id} type={'express'} />,
});

export const shippingColumns: HeadCell[] = [
  locationColumn,
  costBaseColumn,
  weightCostColumn,
  volumeCostColumn,
  timeColumn(),
];

export const shippingExpressColumns: HeadCell[] = [costExpressColumn, expressTimeColumn()];
