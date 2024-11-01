import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, AddButton } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import RelatedProductsAddModal from '../../containers/ProductTabs/RelatedProductsAddModal';
import { defaultProductFilters } from '../../constants';

const useToolbarSetting = () => {
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
      filter: {
        activeMenu: true,
        defaultFilterKeys: getDefaultFilterKeys(defaultProductFilters),
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
      <TableToolbar selectActions={<Stack direction={'row'} spacing={1}></Stack>}>
        <TableToolbarActions settings={settings} />
      </TableToolbar>

      <GeneralActions>
        <AddButton action={onOpen} />
      </GeneralActions>

      <RelatedProductsAddModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(RelatedProductsListToolbar);
