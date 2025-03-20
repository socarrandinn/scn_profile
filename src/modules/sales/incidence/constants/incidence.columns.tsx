import { IncidenceRowActions } from 'modules/sales/incidence/components/IncidenceRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IIncidence } from 'modules/sales/incidence/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { INCIDENCE_PERMISSIONS } from 'modules/sales/incidence/constants/incidence.permissions';

export const incidenceNameColumn: HeadCell<IIncidence> = {
  field: 'name',
  headerName: 'incidence:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: IIncidence) => <EditLink entityId={data?._id as string}>{name}</EditLink>,
};

export const incidenceDescriptionColumn: HeadCell<IIncidence> = {
  field: 'description',
  headerName: 'incidence:fields.description',
};

export const incidenceActionsColumn: HeadCell<IIncidence> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: INCIDENCE_PERMISSIONS.INCIDENCE_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: IncidenceRowActions,
};

export const incidenceColumns: Array<HeadCell<any>> = [
  incidenceNameColumn,
  incidenceDescriptionColumn,
  createdATColumn,
  incidenceActionsColumn,
];
