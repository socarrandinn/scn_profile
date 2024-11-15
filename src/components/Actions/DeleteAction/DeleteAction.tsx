import { useCallback } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ConditionContainer, LoadingButton } from '@dfl/mui-react-common';
import { IDataSummary } from 'modules/common/interfaces/common-data-error';
import DeleteSummary from '../DeleteSummary/DeleteSummary';
import { useAction } from '../hooks/useAction';
import { TransTypography } from 'components/TransTypography';

type DeleteActionProps = {
  open: boolean;
  onClose: () => void;
  onDelete?: () => Promise<any>;
  title?: string;
  isLoading?: boolean;
  confirmation?: string;
};

const DeleteAction = ({
  open,
  onClose,
  title = 'common:deleteConfirmation.title',
  confirmation = 'common:deleteConfirmation.confirmation',
  onDelete,
  isLoading,
}: DeleteActionProps) => {
  const { t } = useTranslation('common');
  const { isData, setDataError, dataError, cancelCountdown } = useAction({ open, onClose });

  const _title = isData ? <TransTypography message='common:bulk:error.title' /> : t(title);

  const handleDelete = useCallback(() => {
    onDelete?.()?.then(({ data }: { data: IDataSummary }) => {
      setDataError(data);
    });
  }, [onDelete, setDataError]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{_title}</DialogTitle>
      <DialogContent>
        <ConditionContainer active={!isData} alternative={<DeleteSummary data={dataError as IDataSummary} />}>
          <DialogContentText id='alert-dialog-description'>{t(confirmation)}</DialogContentText>
        </ConditionContainer>
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={onClose}>
          {cancelCountdown !== null ? `${t('cancel')} (${cancelCountdown}s)` : t('cancel')}
        </Button>
        {!isData && (
          <LoadingButton onClick={handleDelete} autoFocus variant={'contained'} color={'error'} loading={isLoading}>
            {t('delete')}
          </LoadingButton>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default DeleteAction;
