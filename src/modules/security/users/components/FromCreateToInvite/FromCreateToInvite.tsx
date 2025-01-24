import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useToggle } from '@dfl/hook-utils';
import { useCallback, useEffect } from 'react';
import { COMMON_ERRORS } from 'modules/common/constants';
import { useTranslation } from 'react-i18next';
import useUsersInviteForm from '../../hooks/useUsersInviteForm';
import { userInvitationSchema } from '../../schemas/user.schema';
import { FromInviteToDetails } from '../FromInviteToDetails';

type FromCreateToInviteProps = {
  error: any;
  redirect: string;
  watch?: any;
  apiPath: string;
};

export default function FromCreateToInvite ({ error, watch, redirect, apiPath }: Readonly<FromCreateToInviteProps>) {
  const { t } = useTranslation('usersInvite');

  const email = watch('email');
  const security = watch('security');
  const space = watch('space');

  const { mutate, error: errorInvite } = useUsersInviteForm(userInvitationSchema, apiPath);

  const isDuplicated = error?.reference === COMMON_ERRORS.DUPLICATE_KEY && error?.key?.includes('email');
  const { isOpen, onClose, setOpen } = useToggle(isDuplicated);

  const handleInvite = useCallback(() => {
    mutate({ email, security, space: space?._id });
  }, [email, security, mutate, space?._id]);

  useEffect(() => {
    setOpen(isDuplicated);
  }, [isDuplicated, setOpen]);

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{t('duplicatedUser')}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t('duplicatedUserError')}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='grey' onClick={onClose}>
            {t('cancel')}
          </Button>
          <Button variant='contained' onClick={handleInvite}>
            {t('invite')}
          </Button>
        </DialogActions>
      </Dialog>
      <FromInviteToDetails error={errorInvite} redirect={redirect} />
    </>
  );
}
