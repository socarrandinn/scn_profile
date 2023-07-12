import { CategoryRowActions } from 'modules/store/employee/settings/category/components/CategoryRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { ICategory } from 'modules/store/employee/settings/category/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { CATEGORY_PERMISSIONS } from 'modules/store/employee/settings/category/constants/category.permissions';
import CategoryCell from 'modules/store/employee/settings/category/components/CategoryCell';

export const categoryTitleColumn: HeadCell = {
  field: 'name',
  headerName: 'category:fields.name',
  disablePadding: false,
  renderCell: (name, data: ICategory) => <CategoryCell data={data} />,
};

export const categoryDescriptionColumn: HeadCell = {
  field: 'description',
  headerName: 'category:fields.description',
};

export const categoryActionsColumn: HeadCell = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: CATEGORY_PERMISSIONS.CATEGORY_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: CategoryRowActions,
};

export const categoryColumns: HeadCell[] = [
  categoryTitleColumn,
  categoryDescriptionColumn,
  createdATColumn,
  categoryActionsColumn,
];
