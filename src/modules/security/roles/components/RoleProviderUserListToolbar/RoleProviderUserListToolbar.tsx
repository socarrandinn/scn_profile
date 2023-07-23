import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions } from '@dfl/mui-admin-layout';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useTranslation } from 'react-i18next';
import AddProviderToRoleModal from 'modules/security/roles/containers/AddProviderToRoleModal';
import { useDeleteManyRoleBySelection } from 'modules/security/roles/hooks/useDeleteManyRoleBySelection';
import { LoadingButton } from '@dfl/mui-react-common';

const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        createAction: onOpen,
      },
    };
  }, [onOpen]);

  return {
    isOpen,
    onClose,
    settings,
  };
};
const RoleProviderUserListToolbar = ({ roleId }: { roleId: string }) => {
  const { isOpen, settings, onClose } = useToolbarSetting();
  const { t } = useTranslation('common');
  const { isLoading, mutate } = useDeleteManyRoleBySelection(roleId);

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            <LoadingButton
              variant={'contained'}
              startIcon={<DeleteOutlineIcon />}
              color={'error'}
              loading={isLoading}
              onClick={() => {
                mutate();
              }}
            >
              {t('delete')}
            </LoadingButton>
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <AddProviderToRoleModal open={isOpen} onClose={onClose} />
      {/*<AddUserToRoleModal open={isOpen} onClose={onClose} />*/}
    </>
  );
};

export default memo(RoleProviderUserListToolbar);
