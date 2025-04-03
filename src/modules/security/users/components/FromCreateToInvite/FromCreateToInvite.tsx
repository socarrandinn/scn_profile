import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useToggle } from '@dfl/hook-utils';
import { useCallback, useEffect, useMemo } from 'react';
import { COMMON_ERRORS } from 'modules/common/constants';
import { useTranslation } from 'react-i18next';
import useUsersInviteForm from '../../hooks/useUsersInviteForm';
import { userInvitationSchema } from '../../schemas/user.schema';
import { FromInviteToDetails } from '../FromInviteToDetails';
import { HandlerError } from '@dfl/mui-react-common';
import { USER_ERROR, USERS_ERRORS } from '../../constants/errors';

type FromCreateToInviteProps = {
  error: any;
  redirect: string;
  watch?: any;
  apiPath: string;
  onClose?: () => void;
};

export default function FromCreateToInvite ({
  error,
  watch,
  redirect,
  apiPath,
  onClose,
}: Readonly<FromCreateToInviteProps>) {
  const { t } = useTranslation('usersInvite');

  const email = watch('email');
  const security = watch('security');
  const space = watch('space');

  const { mutate, error: errorInvite, reset } = useUsersInviteForm(userInvitationSchema, redirect, apiPath, onClose);

  const isDuplicated = useMemo(
    () => error?.reference === COMMON_ERRORS.DUPLICATE_KEY && error?.key?.includes('email'),
    [error?.reference, error?.key],
  );

  const { isOpen, onClose: onCloseModal, setOpen } = useToggle(isDuplicated);

  const handleInvite = useCallback(() => {
    mutate({ email, security, space: space?._id });
  }, [email, security, mutate, space?._id]);

  useEffect(() => {
    setOpen(isDuplicated);
  }, [isDuplicated, setOpen]);

  const handleClose = useCallback(() => {
    onCloseModal();
    onClose?.();
    reset();
  }, [onCloseModal, onClose, reset]);

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{t('duplicatedUser')}</DialogTitle>
        <DialogContent>
          {errorInvite?.reference === USER_ERROR.INVITATION_ALREADY_EXISTS && (
            <HandlerError error={errorInvite} errors={USERS_ERRORS} />
          )}
          <DialogContentText>{t('duplicatedUserError')}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='grey' onClick={handleClose}>
            {t('cancel')}
          </Button>
          <Button
            variant='contained'
            onClick={handleInvite}
            disabled={errorInvite?.reference === USER_ERROR.INVITATION_ALREADY_EXISTS}
          >
            {t('invite')}
          </Button>
        </DialogActions>
      </Dialog>
      <FromInviteToDetails error={errorInvite} redirect={redirect} onClose={onCloseModal} />
    </>
  );
}
