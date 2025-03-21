import { IncidenceRowActions } from 'modules/sales/incidence/components/IncidenceRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { IIncidence } from 'modules/sales/incidence/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { INCIDENCE_PERMISSIONS } from 'modules/sales/incidence/constants/incidence.permissions';
import { IncidenceStatusPicker } from '../components/IncidenceStatusPicker';
import { INCIDENCE_STATUS_ENUM } from './incidence-status';
import { ReactLink } from '@dfl/react-security';

export const incidenceCodeColumn: HeadCell<IIncidence> = {
  field: 'code',
  headerName: 'incidence:fields.incidence',
  disablePadding: false,
  renderCell: (name: string, data?: IIncidence) => <EditLink entityId={data?._id as string}>{name}</EditLink>,
};

export const incidenceCauseColumn: HeadCell<IIncidence> = {
  field: 'cause.name',
  headerName: 'incidence:fields.cause',
};

export const incidenceOrderCodeColumn: HeadCell<IIncidence> = {
  field: 'orderReference.code',
  headerName: 'incidence:fields.orderCode',
  renderCell: (value: string, data?: IIncidence) => (
    <ReactLink to={`/sales/orders/${data?._id as string}/general`}>{value}</ReactLink>
  ),
};

export const incidenceAssignedToColumn: HeadCell<IIncidence> = {
  field: 'assignedTo',
  headerName: 'incidence:fields.assignedTo',
};

export const incidenceCreatedByColumn: HeadCell<IIncidence> = {
  field: 'createdBy',
  headerName: 'incidence:fields.createdBy',
};

export const incidenceStatusColumn: HeadCell<IIncidence> = {
  field: 'status',
  headerName: 'incidence:fields.status',
  renderCell: (value: INCIDENCE_STATUS_ENUM, data?: IIncidence) => <IncidenceStatusPicker rowId={data?._id as string} value={value} />,
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
  incidenceCodeColumn,
  incidenceCauseColumn,
  incidenceOrderCodeColumn,
  incidenceStatusColumn,
  incidenceAssignedToColumn,
  incidenceCreatedByColumn,
  createdATColumn,
  incidenceActionsColumn,
];
