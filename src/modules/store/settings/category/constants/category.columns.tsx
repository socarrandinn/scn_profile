import { CategoryRowActions } from 'modules/store/settings/category/components/CategoryRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { ICategory } from 'modules/store/settings/category/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { CATEGORY_PERMISSIONS } from 'modules/store/settings/category/constants/category.permissions';

export const categoryNameColumn: HeadCell<ICategory> = {
  field: 'name',
  headerName: 'category:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: ICategory) => (<EditLink entityId={data._id as string}>{name}</EditLink>),
};

export const categoryDescriptionColumn: HeadCell<ICategory> = {
  field: 'description',
  headerName: 'category:fields.description',
};

export const categoryActionsColumn: HeadCell<ICategory> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: CATEGORY_PERMISSIONS.CATEGORY_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: CategoryRowActions,
};

export const categoryColumns: Array<HeadCell<any>> = [
  categoryNameColumn,
  categoryDescriptionColumn,
  createdATColumn,
  categoryActionsColumn
];
