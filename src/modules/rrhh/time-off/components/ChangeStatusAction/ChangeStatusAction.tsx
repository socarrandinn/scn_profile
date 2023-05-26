import { useCallback } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@dfl/mui-react-common';

type DeleteActionProps = {
  open: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  isLoading?: boolean;
};

const ChangeStatusAction = ({ open, onClose, onConfirm, isLoading }: DeleteActionProps) => {
  const { t } = useTranslation('timeOff');

  const handleChangeStatus = useCallback(() => {
    onConfirm?.();
    onClose?.();
  }, [onConfirm, onClose]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{t('')}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>{t(confirmation)}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('common:cancel')}</Button>
        <LoadingButton onClick={handleChangeStatus} autoFocus variant={'contained'} color={'error'} loading={isLoading}>
          {t('actions.confirm')}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default ChangeStatusAction;
