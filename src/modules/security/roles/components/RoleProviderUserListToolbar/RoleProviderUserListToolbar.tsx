import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions } from '@dfl/mui-admin-layout';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useTranslation } from 'react-i18next';
import { useDeleteManyRoleBySelection } from 'modules/security/roles/hooks/useDeleteManyRoleBySelection';
import { LoadingButton } from '@dfl/mui-react-common';
import AddProviderToRoleModal from '../../containers/AddProviderToRoleModal';

type RoleProviderListType = { roleId: string; providerType: string };

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

const RoleProviderUserListToolbar = ({ roleId, providerType }: RoleProviderListType) => {
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
      <AddProviderToRoleModal open={isOpen} onClose={onClose} providerType={providerType} />
    </>
  );
};

export default memo(RoleProviderUserListToolbar);
