import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar } from '@dfl/mui-admin-layout';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { TableHeaderOptions } from 'components/libs/table';

import BannerCleanSelection from '../BannerCleanSelection/BannerCleanSelection';

const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const settings = useMemo<TableHeaderOptions>(() => {
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

const BannerToolbar = () => {
  const { settings } = useToolbarSetting();

  return (
    <TableToolbar selectActions={<Stack direction={'row'} spacing={1}></Stack>}>
      <Stack direction='row' justifyContent={'end'} gap={2} sx={{ width: '100%' }}>
        <TableToolbarActions settings={settings} />
        <BannerCleanSelection />
      </Stack>
    </TableToolbar>
  );
};

export default memo(BannerToolbar);
