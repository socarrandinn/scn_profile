import { memo, useCallback } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { ConfirmDialogProps } from '@dfl/mui-admin-layout';

import DeleteIcon from 'components/icons/DeleteIcon';

const ConfirmDialog = ({
  open,
  onClose,
  title,
  confirmationMessage,
  onConfirm,
  error,
  errors,
  isLoading,
  confirmButtonText,
  imageUrl,
  colorBtn = 'error',
}: Omit<ConfirmDialogProps, 'confirmationMessage'> & {
  imageUrl: string;
  colorBtn?: 'error' | 'warning' | 'info';
  confirmationMessage?: any;
}) => {
  const { t } = useTranslation('common');

  const handleConfirm = useCallback(() => {
    onConfirm?.();
  }, [onConfirm]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      maxWidth='xs'
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Avatar
        variant='square'
        sx={{
          width: 'auto',
          height: '180px',
          backgroundColor: 'transparent',
        }}
        src={imageUrl}
      >
        <DeleteIcon sx={{ fontSize: '160px' }} color='error' />
      </Avatar>
      <DialogTitle sx={{ padding: '16px 16px 8px 16px' }} lineHeight={1.5} textAlign={'center'} id='alert-dialog-title'>
        {title}
      </DialogTitle>
      <DialogContent>
        <HandlerError error={error} errors={errors} />
        <DialogContentText textAlign={'center'} id='alert-dialog-description'>
          {confirmationMessage}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={onClose}>
          {t('cancel')}
        </Button>
        <LoadingButton onClick={handleConfirm} autoFocus variant={'contained'} color={colorBtn} loading={isLoading}>
          {confirmButtonText || t('confirm')}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default memo(ConfirmDialog);
