import { memo, useCallback } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import { useNavigate } from 'react-router';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { TableHeaderOptions } from 'components/libs/table/toolbar/TableHeaderOptions';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { defaultManufactureProductFilters } from 'modules/inventory/product/constants';
import { ExcludeFilterMenu } from 'components/libs/table/toolbar/FilterSelected/ExcludeFilterMenu';

const defaultSettings: TableHeaderOptions = {
  actions: {
    create: false,
    export: false,
  },
  filter: {
    defaultFilterKeys: getDefaultFilterKeys(defaultManufactureProductFilters),
    activeMenu: true,
  },
};
const useToolbarSetting = () => {
  const navigate = useNavigate();
  const handleAddAction = useCallback(() => {
    navigate('create');
  }, [navigate]);

  return {
    handleAddAction,
    settings: defaultSettings,
  };
};

const ManufactureProductListToolbar = () => {
  const { settings } = useToolbarSetting();

  return (
    <>
      <TableToolbar selectActions={<Stack direction={'row'} spacing={1} />}>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <ExcludeFilterMenu />
      </GeneralActions>
    </>
  );
};

export default memo(ManufactureProductListToolbar);
