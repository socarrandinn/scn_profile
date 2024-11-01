import { memo, useMemo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { Stack } from '@mui/material';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';

const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        createAction: onOpen,
        create: false,
      },
      filter: {
        activeMenu: true,
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
