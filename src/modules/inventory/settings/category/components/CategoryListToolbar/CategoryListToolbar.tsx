import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, AddButton } from '@dfl/mui-admin-layout';
import CategoryCreateModal from 'modules/inventory/settings/category/containers/CategoryCreateModal';
import { CATEGORY_PERMISSIONS } from 'modules/inventory/settings/category/constants/category.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import CategoryToggleView from 'modules/inventory/settings/category/components/CategoryListToolbar/CategoryToggleView';
import { useCategoryDetail } from 'modules/inventory/settings/category/context/CategoryDetailContext';
import { initCategoryValue } from 'modules/inventory/settings/category/hooks/useCategoryCreateForm';
import { CategoryBulkVisiblePicker } from 'modules/inventory/settings/category/components/CategoryBulkVisiblePicker';
import { CategoryBulkDeleteButton } from 'modules/inventory/settings/category/components/CategoryBulkDeleteButton';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { CategoryExportButton } from 'modules/export/components/modules/inventory/CategoryExportButton';

const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
      filter: {
        activeMenu: true,
      },
    };
  }, []);

  return {
    isOpen,
    onOpen,
    onClose,
    settings,
  };
};

type Props = {
  search?: any;
  filters: any;
  total: number | undefined;
};

const CategoryListToolbar = (props: Props) => {
  const { isOpen, settings, onClose, onOpen } = useToolbarSetting();
  const { categoryId } = useCategoryDetail();
  const initValue = useMemo(() => {
    return {
      ...initCategoryValue,
      parent: categoryId || null,
    };
  }, [categoryId]);

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <CategoryBulkVisiblePicker />

            <CategoryBulkDeleteButton />
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={CATEGORY_PERMISSIONS.CATEGORY_WRITE}>
          <CategoryToggleView />
          <CategoryExportButton {...props} />
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
      <CategoryCreateModal open={isOpen} onClose={onClose} initValue={initValue} />
    </>
  );
};

export default memo(CategoryListToolbar);
