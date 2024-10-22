import { useCallback } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ChildrenProps, LoadingButton } from '@dfl/mui-react-common';

type ConfirmActionDialogProps = ChildrenProps & {
  okText?: string;
  cancelText?: string;
  open: boolean;
  onClose: () => void;
  onConfirm?: any;
  title?: string;
  isLoading?: boolean;
  confirmation?: string;
  color?: 'success' | 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'warning' | undefined;
};

const ConfirmActionDialog = ({
  open,
  onClose,
  title = 'common:confirmation.title',
  confirmation = 'common:confirmation.description',
  okText = 'accept',
  cancelText = 'cancel',
  onConfirm,
  isLoading,
  children,
  color = 'success',
}: ConfirmActionDialogProps) => {
  const { t } = useTranslation('common');

  const handleOK = useCallback(() => {
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
      <DialogTitle id='alert-dialog-title'>
        <Box sx={{ fontSize: '16px' }}>{t(title)}</Box>
      </DialogTitle>
      <DialogContent>
        {t(confirmation)}
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t(cancelText)}</Button>
        <LoadingButton onClick={handleOK} autoFocus variant={'contained'} color={color} loading={isLoading}>
          {t(okText)}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmActionDialog;
