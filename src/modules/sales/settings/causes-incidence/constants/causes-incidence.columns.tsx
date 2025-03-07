import { CausesIncidenceRowActions } from 'modules/sales/settings/causes-incidence/components/CausesIncidenceRowActions';
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { ICausesIncidence } from 'modules/sales/settings/causes-incidence/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { CAUSES_INCIDENCE_PERMISSIONS } from 'modules/sales/settings/causes-incidence/constants/causes-incidence.permissions';
import { IStatus, LongText } from '@dfl/mui-react-common';
import { CausesIncidenceStatusPicker } from '../components/CausesIncidenceStatusPicker';
import { CAUSE_INCIDENCE_STATUS_MAP } from './causes-incidence-status';
import CausesIncidenceClickableCell from '../components/CausesIncidenceRowActions/CausesIncidenceClickableCell';
import ActiveStatusCell from 'modules/common/components/ActiveStatusCell/ActiveStatusCell';
import CausesIncidenceAudienceCell from '../components/CausesIncidenceAudienceCell/CausesIncidenceAudienceCell';

export const causesIncidenceTitleColumn: HeadCell<ICausesIncidence> = {
  field: 'name',
  headerName: 'causesIncidence:fields.name',
};

export const causesIncidenceDescriptionColumn: HeadCell<ICausesIncidence> = {
  field: 'description',
  headerName: 'causesIncidence:fields.description',
  renderCell: (description: string) => <LongText text={description} lineClamp={2} />,
};

export const causesIncidenceTypeColumn: HeadCell<ICausesIncidence> = {
  field: 'parent',
  headerName: 'causesIncidence:fields.parent',
  disablePadding: false,
  component: CausesIncidenceClickableCell,
};

export const sendNotificationColumn: HeadCell<ICausesIncidence> = {
  field: 'sendNotification',
  headerName: 'causesIncidence:notification.title',
  disablePadding: false,
  component: ActiveStatusCell,
  align: CellAlign.CENTER,
};
export const audienceNotificationColumn: HeadCell<ICausesIncidence> = {
  field: 'notification.audience',
  headerName: 'causesIncidence:notification.audience',
  disablePadding: false,
  component: CausesIncidenceAudienceCell,
};

export const causesIncidenceShopVisibilityColumn: HeadCell<ICausesIncidence> = {
  field: 'isPublic',
  headerName: 'causesIncidence:fields.isPublic',
  renderCell: (isPublic, data) => (
    <CausesIncidenceStatusPicker
      value={CAUSE_INCIDENCE_STATUS_MAP.get(isPublic) as IStatus}
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
  sendNotificationColumn,
  audienceNotificationColumn,
  createdATColumn,
  causesIncidenceActionsColumn,
];
