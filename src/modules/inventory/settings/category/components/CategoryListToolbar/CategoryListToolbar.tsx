import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import CategoryCreateModal from 'modules/inventory/settings/category/containers/CategoryCreateModal';
import { CATEGORY_PERMISSIONS } from 'modules/inventory/settings/category/constants/category.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import CategoryToggleView from 'modules/inventory/settings/category/components/CategoryListToolbar/CategoryToggleView';
import { useCategoryDetail } from 'modules/inventory/settings/category/context/CategoryDetailContext';
import { initCategoryValue } from 'modules/inventory/settings/category/hooks/useCategoryCreateForm';
import { CategoryBulkVisiblePicker } from 'modules/inventory/settings/category/components/CategoryBulkVisiblePicker';
import { CategoryBulkDeleteButton } from 'modules/inventory/settings/category/components/CategoryBulkDeleteButton';

const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
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

const CategoryListToolbar = () => {
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
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
      <CategoryCreateModal open={isOpen} onClose={onClose} initValue={initValue} />
    </>
  );
};

export default memo(CategoryListToolbar);
