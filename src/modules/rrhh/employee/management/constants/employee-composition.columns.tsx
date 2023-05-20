import { EmployeeRowActions } from 'modules/rrhh/employee/management/components/EmployeeRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { ICompensation } from 'modules/rrhh/employee/management/interfaces';
import { CompensationDateCell } from 'modules/rrhh/employee/management/components/CompensationDateCell';
import { CompensationValueCell } from 'modules/rrhh/employee/management/components/CompensationValueCell';
import { CompensationPaymentTypeCell } from 'modules/rrhh/employee/management/components/CompensationPaymentTypeCell';
import { CompensationChangeReasonCell } from 'modules/rrhh/employee/management/components/CompensationChangeReasonCell';
import { EMPLOYEE_PERMISSIONS } from 'modules/rrhh/employee/management/constants/employee.permissions';

export const compensationDateActivatedColumn: HeadCell = {
  field: 'compensation.dateActivated',
  headerName: 'employee:fields.compensation.dateActivated',
  disablePadding: false,
  renderCell: (text, data: ICompensation) => <CompensationDateCell dateActivated={data?.dateActivated} />,
};

export const compensationValueColumn: HeadCell = {
  field: 'compensation.value',
  headerName: 'employee:fields.compensation.value',
  renderCell: (text, data: ICompensation) => <CompensationValueCell value={data?.value} />,
};

export const compensationTypeColumn: HeadCell = {
  field: 'compensation.type',
  headerName: 'employee:fields.compensation.type',
  renderCell: (text, data: ICompensation) => <CompensationPaymentTypeCell type={data?.type} />,
};

export const compensationPaymentTypeColumn: HeadCell = {
  field: 'compensation.paymentType',
  headerName: 'employee:fields.compensation.paymentType',
  renderCell: (text, data: ICompensation) => <CompensationPaymentTypeCell type={data?.paymentType} />,
};

export const compensationChangeReasonColumn: HeadCell = {
  field: 'compensation.changeReason',
  headerName: 'employee:fields.compensation.changeReason',
  // @ts-ignore
  renderCell: (text, data: ICompensation) => <CompensationChangeReasonCell reason={data?.changeReason?.name} />,
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

export const compensationColumns: HeadCell[] = [
  compensationDateActivatedColumn,
  compensationValueColumn,
  compensationTypeColumn,
  compensationPaymentTypeColumn,
  compensationChangeReasonColumn,
  // jobInformationActionsColumn,
];
