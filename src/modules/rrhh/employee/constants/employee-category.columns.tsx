import { EmployeeRowActions } from 'modules/rrhh/employee/components/EmployeeRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { CompensationDateCell } from 'modules/rrhh/employee/components/CompensationDateCell';
import { CategoryNameCell } from 'modules/rrhh/employee/components/CategoryNameCell';
import { CategoryDescriptionCell } from 'modules/rrhh/employee/components/CategoryDescriptionCell';
import { EMPLOYEE_PERMISSIONS } from 'modules/rrhh/employee/constants/employee.permissions';
import { ICategory } from 'modules/rrhh/settings/category/interfaces';

export const categoryDateActivatedColumn: HeadCell = {
  field: 'category.createdAt',
  headerName: 'employee:fields.categories.createdAt',
  disablePadding: false,
  renderCell: (text, data: ICategory) => <CompensationDateCell dateActivated={data?.createdAt} />,
};

export const categoryNameColumn: HeadCell = {
  field: 'category.name',
  headerName: 'employee:fields.categories.name',
  renderCell: (text, data: ICategory) => <CategoryNameCell {...data} name={data?.name} />,
};

export const categoryDescriptionColumn: HeadCell = {
  field: 'category.type',
  headerName: 'employee:fields.categories.description',
  renderCell: (text, data: ICategory) => <CategoryDescriptionCell description={data?.description} />,
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
  categoryDescriptionColumn,
  // categoryActionsColumn,
];
