import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, TableToolbarActions, type TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import RoleCreateModal from 'modules/security/roles/containers/RoleCreateModal';
import DeleteButton from 'modules/security/roles/components/DeleteAction/DeleteButton';
import { useDeleteManyRoles } from 'modules/security/roles/hooks/useDeleteManyRoles';
import { GeneralActions } from 'layouts/portals';

const useToolbarSetting = () => {
  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
    };
  }, []);
  return {
    settings,
  };
};

const RoleListToolbar = () => {
  const { settings } = useToolbarSetting();
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { mutate, isLoading } = useDeleteManyRoles();

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            <DeleteButton isLoading={isLoading} onDelete={mutate} many />
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <RoleCreateModal open={isOpen} onClose={onClose} />
      <GeneralActions>
        <AddButton action={onOpen} />
      </GeneralActions>
    </>
  );
};

export default memo(RoleListToolbar);
