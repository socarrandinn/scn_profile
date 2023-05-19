import { EmployeeRowActions } from 'modules/rrhh/employee/components/EmployeeRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { TimeOffPolicyNameCell } from 'modules/rrhh/settings/time-off-policies/components/TimeOffPolicyNameCell';
import { TimeOffPolicyTypeCell } from 'modules/rrhh/settings/time-off-policies/components/TimeOffPolicyTypeCell';
import { ITimeOffPolicies } from 'modules/rrhh/settings/time-off-policies/interfaces';
import { TIME_OFF_POLICES_PERMISSIONS } from 'modules/rrhh/settings/time-off-policies/constants/time-off-polices.permissions';
export const timeOffPoliciesNameColumn: HeadCell = {
  field: 'rule.name',
  headerName: 'timeOffPolicies:fields.rules.name',
  renderCell: (text, data: ITimeOffPolicies) => <TimeOffPolicyNameCell {...data} name={data?.name} />,
};

export const timeOffPoliciesTypeColumn: HeadCell = {
  field: 'rule.type',
  headerName: 'timeOffPolicies:fields.rules.type',
  renderCell: (text, data: ITimeOffPolicies) => <TimeOffPolicyTypeCell type={data?.type as string} />,
};

export const timeOffPoliciesActionsColumn: HeadCell = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: TIME_OFF_POLICES_PERMISSIONS.TIME_OFF_POLICY_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: EmployeeRowActions,
};

export const timeOffPoliciesColumns: HeadCell[] = [
  timeOffPoliciesNameColumn,
  timeOffPoliciesTypeColumn,
  // categoryActionsColumn,
];
