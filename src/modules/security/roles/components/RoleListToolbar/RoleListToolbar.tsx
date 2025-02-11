import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, AddButton } from '@dfl/mui-admin-layout';
import RoleCreateModal from 'modules/security/roles/containers/RoleCreateModal';
import DeleteButton from 'modules/security/roles/components/DeleteAction/DeleteButton';
import { useDeleteManyRoles } from 'modules/security/roles/hooks/useDeleteManyRoles';
import { GeneralActions } from 'layouts/portals';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

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

const RoleListToolbar = ({ type }: { type: SPACE_TYPE }) => {
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
      <GeneralActions>
        <AddButton action={onOpen} />
      </GeneralActions>
      <RoleCreateModal open={isOpen} onClose={onClose} type={type} />
    </>
  );
};

export default memo(RoleListToolbar);
