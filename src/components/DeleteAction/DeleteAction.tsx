import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ConditionContainer, LoadingButton } from '@dfl/mui-react-common';
import { IDataError } from 'modules/common/interfaces/common-data-error';
import DeleteSummary from './DeleteSummary/DeleteSummary';

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
  const [dataError, setDataError] = useState<IDataError | undefined>(undefined);
  const isNotError = useMemo(() => (dataError?.error as number) > 0 || false, [dataError?.error]);
  const [cancelCountdown, setCancelCountdown] = useState<number | null>(null); // 5 seconds

  useEffect(() => {
    if (open) {
      setDataError(undefined);
      setCancelCountdown(null);
    }
  }, [open]);

  useEffect(() => {
    if (dataError) {
      setCancelCountdown(5);
    }
  }, [dataError]);

  useEffect(() => {
    if (cancelCountdown !== null && cancelCountdown > 0) {
      const timer = setTimeout(() => {
        setCancelCountdown((prev) => (prev ?? 0) - 1);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }

    if (cancelCountdown === 0) {
      onClose();
    }
  }, [cancelCountdown, onClose]);

  const handleDelete = useCallback(() => {
    onDelete?.()?.then(({ data }: { data: IDataError }) => {
      setDataError(data);
    });
  }, [onDelete]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{t(title)}</DialogTitle>
      <DialogContent>
        <ConditionContainer active={!isNotError} alternative={<DeleteSummary data={dataError as IDataError} />}>
          <DialogContentText id='alert-dialog-description'>{t(confirmation)}</DialogContentText>
        </ConditionContainer>
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={onClose}>
          {cancelCountdown !== null ? `${t('cancel')} (${cancelCountdown}s)` : t('cancel')}
        </Button>
        {!isNotError && (
          <LoadingButton onClick={handleDelete} autoFocus variant={'contained'} color={'error'} loading={isLoading}>
            {t('delete')}
          </LoadingButton>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default DeleteAction;
