import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, AddButton } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import RelatedProductstAddModal from 'modules/inventory/product/containers/ProductTabs/RelatedProductstAddModal';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { defaultWarehouseProductsFilters } from 'modules/inventory/warehouse/constants/warehouse-products.filters';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { ExcludeFilterMenu } from 'components/libs/table/toolbar/FilterSelected/ExcludeFilterMenu';

const useToolbarSetting = () => {
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
        menuFilter: false,
      },
      filter: {
        activeMenu: true,
        defaultFilterKeys: getDefaultFilterKeys(defaultWarehouseProductsFilters),
      },
    };
  }, []);
  return {
    settings,
  };
};

const RelatedProductsListToolbar = () => {
  const { settings } = useToolbarSetting();
  const { isOpen, onClose, onOpen } = useToggle(false);

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            {/* <DeleteButton isLoading={isLoading} onDelete={mutate} many /> */}
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <RelatedProductstAddModal open={isOpen} onClose={onClose} />
      <GeneralActions>
        <AddButton action={onOpen} />
        <ExcludeFilterMenu />
      </GeneralActions>
    </>
  );
};

export default memo(RelatedProductsListToolbar);
