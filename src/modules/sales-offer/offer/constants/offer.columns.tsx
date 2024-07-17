import { OfferRowActions } from 'modules/sales-offer/offer/components/OfferRowActions';
import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { IOffer } from 'modules/sales-offer/offer/interfaces';
import { OFFER_PERMISSIONS } from 'modules/sales-offer/offer/constants/offer.permissions';
import { OfferNameCell } from '../components/OfferNameCell';
import { renderOfferTypeChip } from '../components/OfferTypeChip/OfferTypeChip';
import { renderOfferStatus } from '../components/OfferStatus/OfferStatus';

export const offerNameColumn: HeadCell<IOffer> = {
  field: 'name',
  headerName: 'orderOffer:fields.name',
  disablePadding: false,
  component: OfferNameCell,
};

export const offerTypeColumn: HeadCell<IOffer> = {
  field: 'type',
  align: CellAlign.CENTER,
  headerName: 'orderOffer:fields.type',
  renderCell: (type: string) => renderOfferTypeChip(type),
};

export const offerStatusColumn: HeadCell<IOffer> = {
  field: 'status',
  align: CellAlign.CENTER,
  headerName: 'orderOffer:status.title',
  renderCell: (_, data) => renderOfferStatus(data?.fromDate, data?.toDate),
};

export const offerFromDateColumn: HeadCell<IOffer> = {
  field: 'fromDate',
  headerName: 'orderOffer:fields.fromDate',
  type: CellType.DATE,
  width: 200,
};

export const offerToDateColumn: HeadCell<IOffer> = {
  field: 'toDate',
  headerName: 'orderOffer:fields.toDate',
  type: CellType.DATE,
  width: 200,
};

export const offerActionsColumn: HeadCell<IOffer> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: OFFER_PERMISSIONS.OFFER_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: OfferRowActions,
};

export const offerColumns: Array<HeadCell<any>> = [
  offerNameColumn,
  offerTypeColumn,
  offerStatusColumn,
  offerFromDateColumn,
  offerToDateColumn,
  offerActionsColumn,
];
