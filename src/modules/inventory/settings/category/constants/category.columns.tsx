import { CategoryRowActions } from 'modules/inventory/settings/category/components/CategoryRowActions';
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { ICategory } from 'modules/inventory/settings/category/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { CATEGORY_PERMISSIONS } from 'modules/inventory/settings/category/constants/category.permissions';
import { CategoryVisiblePicker } from 'modules/inventory/settings/category/components/CategoryVisiblePicker';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { IconPreview } from '@dfl/mui-react-common';
import Box from '@mui/material/Box';

export const categoryNameColumn: HeadCell<ICategory> = {
  field: 'name',
  headerName: 'category:fields.name',
  renderCell: (name: string, data: ICategory) => (
    <AvatarNameCell
      link={`/inventory/settings/categories/${data._id as string}/subcategories`}
      name={data.name}
      variant={'rounded'}
      image={data.image}
      permissions={[CATEGORY_PERMISSIONS.CATEGORY_VIEW]}
    />
  ),
};

export const categoryDescriptionColumn: HeadCell<ICategory> = {
  field: 'description',
  headerName: 'category:fields.description',
};

export const categoryIconColumn: HeadCell<ICategory> = {
  field: 'icon',
  headerName: 'category:fields.icon',
  sortable: false,
  renderCell: (value, category) => (
    <Box
      sx={{
        '.MuiSvgIcon-root': {
          fill: '#FFF',
        },
      }}
    >
      <IconPreview variant={'filled'} bgColor={category?.color} value={value} />
    </Box>
  ),
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
  categoryIconColumn,
  categoryDescriptionColumn,
  categoryVisibilityColumn,
  createdATColumn,
  categoryActionsColumn,
];
