import { OfferRowActions } from 'modules/sales-offer/offer/components/OfferRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IOffer } from 'modules/sales-offer/offer/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { OFFER_PERMISSIONS } from 'modules/sales-offer/offer/constants/offer.permissions';

export const offerNameColumn: HeadCell<IOffer> = {
  field: 'name',
  headerName: 'offer:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: IOffer) => (<EditLink entityId={data?._id as string}>{name}</EditLink>),
};

export const offerDescriptionColumn: HeadCell<IOffer> = {
  field: 'description',
  headerName: 'offer:fields.description',
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
  offerDescriptionColumn,
  createdATColumn,
  offerActionsColumn
];
