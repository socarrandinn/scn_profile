import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router';
import { useToggle } from '@dfl/hook-utils';
import { useEffect } from 'react';
import { COMMON_ERRORS } from 'modules/common/constants';
import { useTranslation } from 'react-i18next';

type FromCreateToInviteProps = {
  error: any;
}

export default function FromCreateToInvite ({ error }: Readonly<FromCreateToInviteProps>) {
  const { t } = useTranslation('usersInvite');
  const navigate = useNavigate();
  const isDuplicated = error?.reference === COMMON_ERRORS.DUPLICATE_KEY && error?.key?.includes('email');
  const { isOpen, onClose, setOpen } = useToggle(isDuplicated);

  useEffect(() => {
    setOpen(isDuplicated);
  }, [isDuplicated, setOpen]);

  const handleInviteOpen = () => {
    navigate('/');
  };

  return (
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
        <Button variant='contained' onClick={handleInviteOpen} autoFocus>
          {t('invite')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
