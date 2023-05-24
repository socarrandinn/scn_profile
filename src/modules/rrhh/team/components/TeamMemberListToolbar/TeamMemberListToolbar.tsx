import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TablaHeaderOptions, TableToolbar, TableToolbarActions } from '@dfl/mui-admin-layout';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@dfl/mui-react-common';
import { useDeleteManyTeamMembers } from 'modules/rrhh/team/hooks/useDeleteManyTeamMembers';
import { AddMemberModal } from 'modules/rrhh/team/components/AddMemberModal';

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

type Props = {
  teamId: string;
};

const TeamMemberListToolbar = ({ teamId }: Props) => {
  const { isOpen, settings, onClose } = useToolbarSetting();
  const { t } = useTranslation('common');
  const { isLoading, mutate } = useDeleteManyTeamMembers(teamId);

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
      <AddMemberModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(TeamMemberListToolbar);
