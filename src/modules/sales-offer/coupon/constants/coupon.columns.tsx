import { HeadCell } from '@dfl/mui-admin-layout';
import { IOffer } from 'modules/sales-offer/offer/interfaces';
import {
  offerFromDateColumn,
  offerStatusColumn,
  offerToDateColumn,
  offerTypeColumn,
} from 'modules/sales-offer/offer/constants';
import { COUPON_PERMISSIONS } from './coupon.permissions';
import { CouponRowActions } from 'modules/sales-offer/coupon/components/CouponRowActions';
import { CouponNameCell } from 'modules/sales-offer/coupon/components/CouponNameCell';
import { CouponSnippet } from 'modules/sales-offer/coupon/components/CouponSnippet';

export const couponNameColumn: HeadCell<IOffer> = {
  field: 'name',
  headerName: 'offerOrder:fields.name',
  disablePadding: false,
  component: CouponNameCell,
};

export const couponCodeColumn: HeadCell<IOffer> = {
  field: 'code',
  headerName: 'couponOrder:fields.code',
  disablePadding: false,
  renderCell: (code: string) => <CouponSnippet code={code} />,
};

export const couponActionsColumn: HeadCell<IOffer> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: COUPON_PERMISSIONS.COUPON_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: CouponRowActions,
};

export const couponColumns: Array<HeadCell<any>> = [
  couponNameColumn,
  couponCodeColumn,
  offerTypeColumn,
  offerStatusColumn,
  offerFromDateColumn,
  offerToDateColumn,
  couponActionsColumn,
];
