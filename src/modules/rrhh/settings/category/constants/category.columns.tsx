import { CategoryRowActions } from 'modules/rrhh/settings/category/components/CategoryRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { ICategory } from 'modules/rrhh/settings/category/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { CATEGORY_PERMISSIONS } from 'modules/rrhh/settings/category/constants/category.permissions';

export const categoryTitleColumn: HeadCell = {
  field: 'name',
  headerName: 'category:fields.name',
  disablePadding: false,
  renderCell: (name, data: ICategory) => (<EditLink entityId={data._id as string}>{name}</EditLink>),
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
  categoryActionsColumn
];
