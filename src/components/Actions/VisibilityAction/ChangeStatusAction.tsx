import { useCallback } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ConditionContainer, IStatus, LoadingButton } from '@dfl/mui-react-common';
import { IDataSummary } from 'modules/common/interfaces/common-data-error';
import DeleteSummary from 'components/Actions/DeleteSummary/DeleteSummary';
import { useAction } from '../hooks/useAction';
import { TransTypography } from 'components/TransTypography';

type ChangeStatusActionProps = {
  open: boolean;
  onClose: () => void;
  onChange?: (status: IStatus) => Promise<any>;
  title?: string;
  isLoading?: boolean;
  confirmation?: string;
  status: IStatus;
};

const ChangeStatusAction = ({
  open,
  onClose,
  title = 'common:confirmation.title',
  confirmation = 'common:confirmation.description',
  onChange,
  isLoading,
  status,
}: ChangeStatusActionProps) => {
  const { t } = useTranslation('common');
  const { isData, setDataError, dataError, cancelCountdown } = useAction({ open, onClose });
  const _title = isData ? (
    <TransTypography message='common:bulk:visibility.title' values={{ status: status?.title }} />
  ) : (
    t(title)
  );

  const handleDelete = useCallback(() => {
    onChange?.(status)?.then(({ data }: { data: IDataSummary }) => {
      setDataError(data);
    });
  }, [onChange, setDataError, status]);

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
          <LoadingButton onClick={handleDelete} autoFocus variant={'contained'} color={'primary'} loading={isLoading}>
            {t('confirmation.confirm')}
          </LoadingButton>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ChangeStatusAction;
