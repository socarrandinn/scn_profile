import { CausesIncidenceRowActions } from 'modules/sales/settings/causes-incidence/components/CausesIncidenceRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { CAUSES_INCIDENCE_TYPE_ENUM, ICausesIncidence } from 'modules/sales/settings/causes-incidence/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { CAUSES_INCIDENCE_PERMISSIONS } from 'modules/sales/settings/causes-incidence/constants/causes-incidence.permissions';
import { CausesIncidenceTypeCell } from '../components/CausesIncidenceTypeCell';
import { IStatus, LongText } from '@dfl/mui-react-common';
import { CausesIncidenceStatusPicker } from '../components/CausesIncidenceStatusPicker';
import { CAUSE_INCIDENCE_STATUS_MAP } from './causes-incidence-status';

export const causesIncidenceTypeColumn: HeadCell<ICausesIncidence> = {
  field: 'type',
  headerName: 'causesIncidence:fields.type',
  disablePadding: false,
  renderCell: (type: CAUSES_INCIDENCE_TYPE_ENUM) => <CausesIncidenceTypeCell type={type} />,
};

export const causesIncidenceTitleColumn: HeadCell<ICausesIncidence> = {
  field: 'title',
  headerName: 'causesIncidence:fields.title',
};

export const causesIncidenceDescriptionColumn: HeadCell<ICausesIncidence> = {
  field: 'description',
  headerName: 'causesIncidence:fields.description',
  renderCell: (description: string) => <LongText text={description} lineClamp={2} />,
};
export const causesIncidenceShopVisibilityColumn: HeadCell<ICausesIncidence> = {
  field: 'shopVisibility',
  headerName: 'causesIncidence:fields.shopVisibility',
  renderCell: (shopVisibility, data) => (
    <CausesIncidenceStatusPicker
      value={CAUSE_INCIDENCE_STATUS_MAP.get(shopVisibility) as IStatus}
      causeId={data?._id as string}
    />
  ),
};

export const causesIncidenceActionsColumn: HeadCell<ICausesIncidence> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: CAUSES_INCIDENCE_PERMISSIONS.CAUSES_INCIDENCE_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: CausesIncidenceRowActions,
};

export const causesIncidenceColumns: Array<HeadCell<any>> = [
  causesIncidenceTitleColumn,
  causesIncidenceDescriptionColumn,
  causesIncidenceTypeColumn,
  causesIncidenceShopVisibilityColumn,
  createdATColumn,
  causesIncidenceActionsColumn,
];
