import { useCallback } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ConditionContainer, LoadingButton } from '@dfl/mui-react-common';
import { IDataSummary } from 'modules/common/interfaces/common-data-error';
import DeleteSummary from '../DeleteSummary/DeleteSummary';
import { useAction } from '../hooks/useAction';
import { TransTypography } from 'components/TransTypography';

type ConfirmBulkActionProps = {
  open: boolean;
  onClose: () => void;
  onDelete?: () => Promise<any>;
  isLoading?: boolean;
  title?: string;
  confirmation?: string;
  confirm?: string;
  color: 'success' | 'primary' | 'warning';
};

const ConfirmBulkAction = ({
  open,
  onClose,
  title = 'common:confirm.title',
  confirmation = 'common:confirm.confirmation',
  confirm = 'common:confirm.confirm',
  onDelete,
  isLoading,
  color,
}: ConfirmBulkActionProps) => {
  const { t } = useTranslation('common');
  const { isData, setDataError, dataError, cancelCountdown } = useAction({ open, onClose });

  const _title = isData ? <TransTypography message='common:bulk.confirmation.title' /> : t(title);

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
      maxWidth='xs'
      fullWidth
    >
      <DialogTitle id='alert-dialog-title'>{_title}</DialogTitle>
      <DialogContent>
        <ConditionContainer active={!isData} alternative={<DeleteSummary data={dataError as IDataSummary} />}>
          <DialogContentText id='alert-dialog-description'>{confirmation}</DialogContentText>
        </ConditionContainer>
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={onClose}>
          {cancelCountdown !== null ? `${t('cancel')} (${cancelCountdown}s)` : t('cancel')}
        </Button>
        {!isData && (
          <LoadingButton onClick={handleDelete} autoFocus variant={'contained'} color={color} loading={isLoading}>
            {confirm}
          </LoadingButton>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmBulkAction;
