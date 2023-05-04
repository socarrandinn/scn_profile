import { EmployeeRowActions } from 'modules/rrhh/employee/components/EmployeeRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { EMPLOYEE_PERMISSIONS } from 'modules/rrhh/employee/constants/employee.permissions';
import { JobInformationDateCell } from 'modules/rrhh/employee/components/JobInformationDateCell';
import { JobInformation } from 'modules/rrhh/employee/interfaces/job-information';
import { JobInformationLocationCell } from '../components/JobInformationLocationCell';
import { JobInformationReportedCell } from 'modules/rrhh/employee/components/JobInformationReportedCell';
import { JobInformationPositionCell } from 'modules/rrhh/employee/components/JobInformationPositionCell';

export const jobInformationDateActivatedColumn: HeadCell = {
  field: 'jobInformation.dateActivated',
  headerName: 'employee:fields.jobInformation.dateActivated',
  disablePadding: false,
  renderCell: (text, data: JobInformation) => <JobInformationDateCell dateActivated={data?.dateActivated} />,
};

export const jobInformationLocationColumn: HeadCell = {
  field: 'jobInformation.location',
  headerName: 'employee:fields.jobInformation.location',
  // @ts-ignore
  renderCell: (text, data: JobInformation) => <JobInformationLocationCell location={data?.location} />,
};

export const jobInformationPositionColumn: HeadCell = {
  field: 'jobInformation.position',
  headerName: 'employee:fields.jobInformation.position',
  // @ts-ignore
  renderCell: (text, data: JobInformation) => <JobInformationPositionCell position={data?.position} />,
};

export const jobInformationReportedColumn: HeadCell = {
  field: 'jobInformation.reported',
  headerName: 'employee:fields.jobInformation.reported',
  // @ts-ignore
  renderCell: (text, data: JobInformation) => <JobInformationReportedCell reportedTo={data?.reported} />,
};

export const jobInformationActionsColumn: HeadCell = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: EMPLOYEE_PERMISSIONS.EMPLOYEE_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: EmployeeRowActions,
};

export const jobInformationColumns: HeadCell[] = [
  jobInformationDateActivatedColumn,
  jobInformationLocationColumn,
  jobInformationPositionColumn,
  jobInformationReportedColumn,
  // jobInformationActionsColumn,
];
