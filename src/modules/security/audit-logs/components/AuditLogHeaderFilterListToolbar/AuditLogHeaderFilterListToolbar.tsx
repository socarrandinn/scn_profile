import { memo, useMemo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbarActions, TablaHeaderOptions } from '@dfl/mui-admin-layout';
import { Stack } from '@mui/material';

const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        createAction: onOpen,
        create: false,
      },
    };
  }, [onOpen]);

  return {
    isOpen,
    onClose,
    settings,
  };
};
const AuditLogHeaderFilterListToolbar = () => {
  const { settings } = useToolbarSetting();

  return (
    <Stack
      sx={(theme) => ({
        '& .MuiFormControl-root, .MuiButtonBase-root': {
          backgroundColor: theme.palette.background.paper,
        },
      })}
    >
      <TableToolbarActions settings={settings} />
    </Stack>
  );
};

export default memo(AuditLogHeaderFilterListToolbar);
