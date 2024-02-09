import { useCallback } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@dfl/mui-react-common';

type ConfirmActionProps = {
  open: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  title?: string;
  isLoading?: boolean;
  confirmation?: string;
  confirmButtonText?: string;
};

const ConfirmAction = ({
  open,
  onClose,
  title = 'common:confirmation.title',
  confirmation = 'common:confirmation.description',
  confirmButtonText = 'common:confirmation.confirm',
  onConfirm,
  isLoading,
}: ConfirmActionProps) => {
  const { t } = useTranslation('common');

  const handleDelete = useCallback(() => {
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
      <DialogTitle id='alert-dialog-title'>{t(title)}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>{t(confirmation)}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('cancel')}</Button>
        <LoadingButton onClick={handleDelete} autoFocus variant={'contained'} loading={isLoading}>
          {t(confirmButtonText)}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmAction;
