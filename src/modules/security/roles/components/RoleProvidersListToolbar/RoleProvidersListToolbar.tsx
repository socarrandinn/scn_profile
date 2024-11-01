import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, AddButton } from '@dfl/mui-admin-layout';
import DeleteButton from 'modules/security/roles/components/DeleteAction/DeleteButton';
import { useDeleteManyRoles } from 'modules/security/roles/hooks/useDeleteManyRoles';
import { GeneralActions } from 'layouts/portals';
import RoleProviderCreateModal from '../../containers/RoleProviderCreateModal';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';

const useToolbarSetting = () => {
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
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

const RoleProvidersListToolbar = () => {
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
      <RoleProviderCreateModal open={isOpen} onClose={onClose} />
      <GeneralActions>
        <AddButton action={onOpen} />
      </GeneralActions>
    </>
  );
};

export default memo(RoleProvidersListToolbar);
