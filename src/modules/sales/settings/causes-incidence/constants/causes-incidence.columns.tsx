import { CausesIncidenceRowActions } from 'modules/sales/settings/causes-incidence/components/CausesIncidenceRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { ICausesIncidence } from 'modules/sales/settings/causes-incidence/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { CAUSES_INCIDENCE_PERMISSIONS } from 'modules/sales/settings/causes-incidence/constants/causes-incidence.permissions';

export const causesIncidenceTypeColumn: HeadCell<ICausesIncidence> = {
  field: 'type',
  headerName: 'causesIncidence:fields.type',
  disablePadding: false,
  renderCell: (type: string, data: ICausesIncidence) => <EditLink entityId={data._id as string}>{type}</EditLink>,
};

export const causesIncidenceDescriptionColumn: HeadCell<ICausesIncidence> = {
  field: 'description',
  headerName: 'causesIncidence:fields.description',
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
  causesIncidenceTypeColumn,
  causesIncidenceDescriptionColumn,
  createdATColumn,
  causesIncidenceActionsColumn,
];
