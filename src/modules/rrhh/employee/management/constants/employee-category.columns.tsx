import { EmployeeRowActions } from 'modules/rrhh/employee/management/components/EmployeeRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { CompensationDateCell } from 'modules/rrhh/employee/management/components/CompensationDateCell';
import { CategoryNameCell } from 'modules/rrhh/employee/management/components/CategoryNameCell';
import { CategoryDescriptionCell } from 'modules/rrhh/employee/management/components/CategoryDescriptionCell';
import { EMPLOYEE_PERMISSIONS } from 'modules/rrhh/employee/management/constants/employee.permissions';
import { IEmployeeCategory } from 'modules/rrhh/employee/management/interfaces';

export const categoryDateActivatedColumn: HeadCell = {
  field: 'category.dateActivated',
  headerName: 'employee:fields.categories.dateActivated',
  disablePadding: false,
  renderCell: (text, data: { dateActivated: Date }) => <CompensationDateCell dateActivated={data?.dateActivated} />,
};

export const categoryNameColumn: HeadCell = {
  field: 'category.name',
  headerName: 'employee:fields.categories.name',
  // @ts-ignore
  renderCell: (text, data: IEmployeeCategory) => <CategoryNameCell {...data} name={data?.category?.name} />,
};

export const categoryNotesColumn: HeadCell = {
  field: 'category.type',
  headerName: 'employee:fields.categories.notes',
  renderCell: (text, data: IEmployeeCategory) => <CategoryDescriptionCell description={data?.notes} />,
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

export const categoryColumns: HeadCell[] = [
  categoryDateActivatedColumn,
  categoryNameColumn,
  categoryNotesColumn,
  // categoryActionsColumn,
];
