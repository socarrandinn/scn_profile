import { CategoryRowActions } from 'modules/inventory/settings/category/components/CategoryRowActions';
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { ICategory } from 'modules/inventory/settings/category/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { CATEGORY_PERMISSIONS } from 'modules/inventory/settings/category/constants/category.permissions';
import { CategoryVisiblePicker } from 'modules/inventory/settings/category/components/CategoryVisiblePicker';
import { CategoryCell } from 'modules/inventory/settings/category/components/CategoryCell';

export const categoryNameColumn: HeadCell<ICategory> = {
  field: 'name',
  headerName: 'category:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: ICategory) => (
        <CategoryCell categoryId={data._id as string} name={data.name} image={data.image}/>),
};

export const categoryDescriptionColumn: HeadCell<ICategory> = {
  field: 'description',
  headerName: 'category:fields.description',
};

export const categoryVisibilityColumn: HeadCell<ICategory> = {
  field: 'visible',
  align: CellAlign.CENTER,
  headerName: 'category:fields.visibility',
  component: CategoryVisiblePicker,
};

export const categoryActionsColumn: HeadCell<ICategory> = {
  field: 'actions',
  sortable: false,
  width: 160,
  align: CellAlign.CENTER,
  permissions: CATEGORY_PERMISSIONS.CATEGORY_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: CategoryRowActions,
};

export const categoryColumns: Array<HeadCell<any>> = [
  categoryNameColumn,
  categoryDescriptionColumn,
  categoryVisibilityColumn,
  createdATColumn,
  categoryActionsColumn
];
