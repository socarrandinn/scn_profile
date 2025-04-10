import { IncidenceRowActions } from 'modules/sales/incidence/components/IncidenceRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { IIncidence } from 'modules/sales/incidence/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { INCIDENCE_PERMISSIONS } from 'modules/sales/incidence/constants/incidence.permissions';
import { IncidenceStatusPicker } from '../components/IncidenceStatusPicker';
import { INCIDENCE_STATUS_ENUM } from './incidence-status';
import { ReactLink } from '@dfl/react-security';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { ORDER_REFERENCE_TYPE } from 'modules/sales/common/constants/order.enum';

export const incidenceCodeColumn: HeadCell<IIncidence> = {
  field: 'code',
  headerName: 'incidence:fields.incidence',
  disablePadding: false,
  renderCell: (name: string, data?: IIncidence) => (
    <AvatarNameCell link={`/sales/incidences/${data?._id as string}/general`} name={name} hideImage />
  ),
};

export const incidenceCauseColumn: HeadCell<IIncidence> = {
  field: 'cause.name',
  headerName: 'incidence:fields.cause',
};

export const incidenceOrderCodeColumn: HeadCell<IIncidence> = {
  field: 'orderReference.code',
  headerName: 'incidence:fields.orderCode',
  width: 200,
  renderCell: (value: string, data?: IIncidence) => {
    const route = data?.referenceType === ORDER_REFERENCE_TYPE.ORDER ? 'orders' : 'sub-orders'
    return (
      <ReactLink to={`/sales/${route}/${data?.orderReference?._id as string}/general`} underline='hover'>
        {value}
      </ReactLink>
    )
  },
};

export const incidenceAssignedToColumn: HeadCell<IIncidence> = {
  field: 'responsible.name',
  headerName: 'incidence:fields.assignedTo',
  renderCell: (value: string, data?: IIncidence) => (
    <AvatarNameCell
      link={`/security/system-users/user/${data?.responsible?._id as string}/general`}
      image={data?.responsible?.avatar}
      name={data?.responsible?.fullName}
      secondary={data?.responsible?.email}
    />
  ),
};

export const incidenceCreatedByColumn: HeadCell<IIncidence> = {
  field: 'createdBy.fullName',
  headerName: 'incidence:fields.createdBy',
  renderCell: (value: string, data?: IIncidence) => (
    <AvatarNameCell
      link={`/security/system-users/user/${data?.createdBy?._id as string}/general`}
      image={data?.createdBy?.avatar}
      name={data?.createdBy?.fullName}
      secondary={data?.createdBy?.email}
    />
  ),
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
  renderCell: (value: string, data: IIncidence) => <IncidenceRowActions rowId={data?._id as string} incidence={data} />,
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
