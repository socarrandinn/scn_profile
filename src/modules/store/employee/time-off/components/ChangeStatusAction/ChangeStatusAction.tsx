import { useCallback } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@dfl/mui-react-common';
import { TimeOffStatusEnum } from '../../constants/time-off-status.enum';

type DeleteActionProps = {
  open: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  isLoading?: boolean;
  status: TimeOffStatusEnum;
};

const ChangeStatusAction = ({ open, onClose, onConfirm, isLoading, status }: DeleteActionProps) => {
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
      <DialogTitle id='alert-dialog-title'>{t(`changeStatus.status.${status}.title`)}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>{t(`changeStatus.status.${status}.description`)}</DialogContentText>
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
