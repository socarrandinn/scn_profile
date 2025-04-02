import { memo, useMemo } from 'react';
import { Box } from '@mui/material';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { TableToolbar } from '@dfl/mui-admin-layout';

const useToolbarSetting = () => {
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
      search: {
        disabled: true,
      },
      filter: {
        activeMenu: true,
      },
    };
  }, []);

  return {
    settings,
  };
};

const StockActivityToolbar = () => {
  const { settings } = useToolbarSetting();

  return (
    <Box
      sx={{
        '& .MuiToolbar-root': {
          padding: 0,
          minHeight: 30,
        },
      }}
    >
      <TableToolbar>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
    </Box>
  );
};

export default memo(StockActivityToolbar);
