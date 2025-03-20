import { memo, useCallback } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { ConfirmDialog } from '@dfl/mui-admin-layout';
import { useTranslation } from 'react-i18next';
import { IconButton } from '@dfl/mui-react-common';
import { IUserInvite } from '../../interfaces/IUserInvite';
import { INVITATION_STATUS, USER_INVITE_STATUS } from '../../constants/user-status.enum';
import ResendIcon from 'components/icons/ResendIcon';
import { useUserActionInvitation } from '../../hooks/useUserActionInvitation';

type Props = {
  data: IUserInvite;
};

const UserInvitationResend = ({ data }: Props) => {
  const { t } = useTranslation('common');
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading } = useUserActionInvitation(data?._id as string, INVITATION_STATUS.RESEND, onClose);

  const onConfirm = useCallback(() => {
    mutate(data?.email);
  }, [mutate, data?.email]);

  return (
    <>
      <IconButton onClick={onOpen} tooltip={t('resend')} disabled={data?.status !== USER_INVITE_STATUS.PENDING}>
        <ResendIcon width={18} height={18} color={data?.status !== USER_INVITE_STATUS.PENDING ? '#bdbdbd' : 'black'} />
      </IconButton>
      <ConfirmDialog
        isLoading={isLoading}
        open={isOpen}
        onClose={onClose}
        confirmButtonText={t('confirmation.confirm')}
        onConfirm={onConfirm}
        title={t('resendConfirmation.title')}
        confirmationMessage={t('resendConfirmation.confirmation')}
      />
    </>
  );
};

export default memo(UserInvitationResend);
