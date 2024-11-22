import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ConditionContainer, LoadingButton } from '@dfl/mui-react-common';

type DeleteByHandleErrorActionProps = {
  open: boolean;
  onClose: () => void;
  onDelete?: () => void;
  title?: string;
  isLoading?: boolean;
  confirmation?: string;
  error?: any;
  errors?: any;
};

const DeleteByHandleErrorAction = ({
  open,
  onClose,
  title = 'common:deleteConfirmation.title',
  confirmation = 'common:deleteConfirmation.confirmation',
  onDelete,
  isLoading,
  error,
  errors,
}: DeleteByHandleErrorActionProps) => {
  const { t } = useTranslation('common');

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <ConditionContainer active={!error} alternative={<></>}>
          {/* // custom handle error */}
          <DialogContentText id='alert-dialog-description'>{t(confirmation)}</DialogContentText>
        </ConditionContainer>
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={onClose}>
          {t('cancel')}
        </Button>
        <LoadingButton onClick={onDelete} autoFocus variant={'contained'} color={'error'} loading={isLoading}>
          {t('delete')}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteByHandleErrorAction;
