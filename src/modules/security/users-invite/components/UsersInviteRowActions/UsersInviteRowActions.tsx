import { memo, useMemo } from 'react';
import { Chip, CircularProgress, Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useDeleteUsersInvite } from 'modules/security/users-invite/hooks/useDeleteUsersInvite';
import { DeleteRowAction } from '@dfl/mui-admin-layout';
import { CancelOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import useUpdateUserInviteStatus from '../../hooks/useUpdateUserInviteStatus';
import { USER_INVITE_STATUS_ENUM } from '../../interfaces';
import { ConfirmAction } from 'components/ConfirmAction';

type UserStatusProps = {
  rowId: string;
  record: any;
};

const UsersInviteRowActions = ({ rowId, record }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { isOpen: open, onClose: onCancelClose, onOpen: onCancelOpen } = useToggle();
  const { t } = useTranslation('usersInvite');
  /*  const handleEdit = useParamsLink({ edit: rowId }); */
  const { mutate, isLoading, error } = useDeleteUsersInvite(rowId, onClose);
  const { mutateAsync, isLoading: isCancelLoading } = useUpdateUserInviteStatus(rowId);
  const isPending = useMemo(() => record?.status === USER_INVITE_STATUS_ENUM.PENDING, [record]);
  return (
    <>
      <Stack direction='row' spacing={1} alignItems={'center'}>
        <Chip
          sx={{ cursor: 'pointer' }}
          color='error'
          icon={isCancelLoading ? <CircularProgress size={15} /> : <CancelOutlined />}
          label={t('cancel')}
          variant='outlined'
          size='small'
          onClick={onCancelOpen}
          clickable={!isCancelLoading}
          disabled={!isPending}
        />

        <ConfirmAction
          onClose={onCancelClose}
          open={open}
          onConfirm={() => {
            mutateAsync();
          }}
          title={t('confirm.title')}
          confirmation={t('confirm.confirmation')}
        />
        <DeleteRowAction
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          error={error}
          isLoading={isLoading}
          onDelete={mutate}
        />
      </Stack>
    </>
  );
};

export default memo(UsersInviteRowActions);
