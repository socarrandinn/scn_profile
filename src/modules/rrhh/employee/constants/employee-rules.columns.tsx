import { EmployeeRowActions } from 'modules/rrhh/employee/components/EmployeeRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { RuleNameCell } from 'modules/rrhh/employee/components/RuleNameCell';
import { EMPLOYEE_PERMISSIONS } from 'modules/rrhh/employee/constants/employee.permissions';
import { ITimeOffPolicies } from 'modules/rrhh/settings/time-off-policies/interfaces';
import { timeOffPoliciesTypeColumn } from 'modules/rrhh/settings/time-off-policies/constants/time-off-policies.columns';

export const categoryNameColumn: HeadCell = {
  field: 'rule.name',
  headerName: 'employee:fields.rules.name',
  renderCell: (text, data: ITimeOffPolicies) => <RuleNameCell {...data} name={data?.name}/>,
};

export const categoryActionsColumn: HeadCell = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: EMPLOYEE_PERMISSIONS.EMPLOYEE_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: EmployeeRowActions,
};

export const ruleColumns: HeadCell[] = [
  categoryNameColumn,
  timeOffPoliciesTypeColumn,
  // categoryActionsColumn,
];
