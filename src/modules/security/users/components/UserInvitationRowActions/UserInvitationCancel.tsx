import { memo, useCallback } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { ConfirmDialog } from '@dfl/mui-admin-layout';
import { useTranslation } from 'react-i18next';
import { CancelOutlined } from '@mui/icons-material';
import { IconButton } from '@dfl/mui-react-common';
import { IUserInvite } from '../../interfaces/IUserInvite';
import { INVITATION_STATUS, USER_INVITE_STATUS } from '../../constants/user-status.enum';
import { useUserActionInvitation } from '../../hooks/useUserActionInvitation';

type Props = {
  data: IUserInvite;
};

const UserInvitationCancel = ({ data }: Props) => {
  const { t } = useTranslation('common');
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading } = useUserActionInvitation(data?._id as string, INVITATION_STATUS.CANCEL, onClose);

  const onConfirm = useCallback(() => {
    mutate(data?.email);
  }, [mutate]);

  return (
    <>
      <IconButton
        tooltip={t('cancel')}
        color='error'
        onClick={onOpen}
        disabled={data?.status !== USER_INVITE_STATUS.PENDING}
      >
        <CancelOutlined color='error' />
      </IconButton>
      <ConfirmDialog
        isLoading={isLoading}
        open={isOpen}
        onClose={onClose}
        onConfirm={onConfirm}
        title={t('cancelConfirmation.title')}
        confirmationMessage={t('cancelConfirmation.confirmation')}
      />
    </>
  );
};

export default memo(UserInvitationCancel);
