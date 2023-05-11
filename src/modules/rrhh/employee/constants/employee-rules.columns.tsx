import { EmployeeRowActions } from 'modules/rrhh/employee/components/EmployeeRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { RuleNameCell } from 'modules/rrhh/employee/components/RuleNameCell';
import { CategoryDescriptionCell } from 'modules/rrhh/employee/components/CategoryDescriptionCell';
import { EMPLOYEE_PERMISSIONS } from 'modules/rrhh/employee/constants/employee.permissions';
import { ITimeOffPolicies } from 'modules/rrhh/settings/time-off-policies/interfaces';
export const categoryNameColumn: HeadCell = {
  field: 'rule.name',
  headerName: 'employee:fields.rules.name',
  renderCell: (text, data: ITimeOffPolicies) => <RuleNameCell {...data} name={data?.name} />,
};

export const categoryNotesColumn: HeadCell = {
  field: 'rule.type',
  headerName: 'employee:fields.rules.type',
  renderCell: (text, data: ITimeOffPolicies) => <CategoryDescriptionCell description={data?.type} />,
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
  categoryNotesColumn,
  // categoryActionsColumn,
];
