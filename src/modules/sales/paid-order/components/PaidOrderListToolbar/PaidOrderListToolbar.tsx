import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { TableHeaderOptions } from 'components/libs/table/toolbar/TableHeaderOptions';
import { ExcludeFilterMenu } from 'components/libs/table/toolbar/FilterSelected/ExcludeFilterMenu';
import { defaultPaidOrderFilterKeys } from '../../constants';
import { getDefaultFilterKeys } from 'utils/custom-filters';

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
        defaultFilterKeys: getDefaultFilterKeys(defaultPaidOrderFilterKeys),
      },
    };
  }, []);

  return {
    settings,
  };
};

const PaidOrderListToolbar = () => {
  const { settings } = useToolbarSetting();

  return (
    <>
      <TableToolbar selectActions={<Stack direction={'row'} spacing={1}></Stack>}>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <ExcludeFilterMenu />
      </GeneralActions>
    </>
  );
};

export default memo(PaidOrderListToolbar);
