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
import FromInviteToDetails from '../FromInviteToDetails/FromInviteToDetails';

type FromCreateToInviteProps = {
  error: any;
  watch?: any;
}

export default function FromCreateToInvite ({ error, watch }: Readonly<FromCreateToInviteProps>) {
  const { t } = useTranslation('usersInvite');

  const email = watch('email');
  const security = watch('security');

  const { mutate, error: errorInvite } = useUsersInviteForm();

  const isDuplicated = error?.reference === COMMON_ERRORS.DUPLICATE_KEY && error?.key?.includes('email');
  const { isOpen, onClose, setOpen } = useToggle(isDuplicated);

  useEffect(() => {
    setOpen(isDuplicated);
  }, [isDuplicated, setOpen]);

  const handleInvite = useCallback(() => {
    mutate({ email, security });
  }, [email, security, mutate]);

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {t('duplicatedUser')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t('duplicatedUserError')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='grey' onClick={onClose}>{t('cancel')}</Button>
          <Button variant='contained' onClick={handleInvite} autoFocus>
            {t('invite')}
          </Button>
        </DialogActions>
      </Dialog>
      <FromInviteToDetails error={errorInvite} />
    </>
  );
}
