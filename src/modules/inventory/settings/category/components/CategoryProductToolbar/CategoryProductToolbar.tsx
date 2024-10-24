import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar, ExportButton } from '@dfl/mui-admin-layout';
import { useToggle } from '@dfl/hook-utils';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { CATEGORY_PERMISSIONS } from 'modules/inventory/settings/category/constants';
import { TableHeaderOptions } from 'components/libs/table';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { defaultSubCategoryProductFilters } from 'modules/inventory/product/constants';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { ExcludeFilterMenu } from 'components/libs/table/toolbar/FilterSelected/ExcludeFilterMenu';

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
        defaultFilterKeys: getDefaultFilterKeys(defaultSubCategoryProductFilters),
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
  const { settings } = useToolbarSetting();

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            {/* <DeleteRowAction isLoading={isLoading} onDelete={mutate} /> */}
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={CATEGORY_PERMISSIONS.CATEGORY_VIEW}>
          <ExportButton />
        </PermissionCheck>
        <ExcludeFilterMenu />
      </GeneralActions>
    </>
  );
};

export default memo(CategoryListToolbar);
