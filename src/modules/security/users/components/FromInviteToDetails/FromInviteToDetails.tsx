import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router';
import { useToggle } from '@dfl/hook-utils';
import { useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { USERS_ERRORS } from 'modules/security/users/constants';

type FromCreateToInviteProps = {
  error: any;
  redirect: string;
  onClose?: () => void;
}

export default function FromInviteToDetails ({ error, redirect, onClose }: Readonly<FromCreateToInviteProps>) {
  const { t } = useTranslation('usersInvite');
  const navigate = useNavigate();

  const isExisted = useMemo(() => error?.reference === USERS_ERRORS.USER_EXISTE_IN_SYSTEM && error?.userId, [error?.reference, error?.userId]);

  const { isOpen, onClose: onCloseModal, setOpen } = useToggle(isExisted);

  const handleClose = useCallback(() => {
    onCloseModal();
    onClose?.();
  }, [onClose, onCloseModal]);

  useEffect(() => {
    setOpen(isExisted);
  }, [isExisted, setOpen]);

  const handleDetail = useCallback(() => {
    navigate(`${redirect}/${error?.userId as string}/general`);
  }, [navigate, redirect, error?.userId]);

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        {t('userAlreadyExist')}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {t('duplicatedUserSpaceError')}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={handleClose}>{t('cancel')}</Button>
        <Button variant='contained' onClick={handleDetail} autoFocus>
          {t('goToUser')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
