import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { TableHeaderOptions } from 'components/libs/table';
import { incidenceFilters } from '../../constants';
import { TableToolbar } from '@dfl/mui-admin-layout';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';

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
        defaultFilterKeys: getDefaultFilterKeys(incidenceFilters.slice(1)),
      },
    };
  }, []);

  return {
    settings,
  };
};

const IncidenceListToolbar = () => {
  const { settings } = useToolbarSetting();

  return (
    <>
      <TableToolbar selectActions={<Stack direction={'row'} spacing={1}></Stack>}>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
    </>
  );
};

export default memo(IncidenceListToolbar);
