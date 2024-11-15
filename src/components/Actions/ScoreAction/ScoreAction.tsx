import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ConditionContainer, Form, LoadingButton } from '@dfl/mui-react-common';
import { IDataSummary } from 'modules/common/interfaces/common-data-error';
import DeleteSummary from '../DeleteSummary/DeleteSummary';
import { useAction } from '../hooks/useAction';
import { TransTypography } from 'components/TransTypography';
import { yupResolver } from '@hookform/resolvers/yup';
import { scoreSchema } from './score.schema';
import { useForm } from 'react-hook-form';
import ScoreForm from 'modules/inventory/product/containers/ProductFormSections/ScoreForm';

type ScoreActionProps = {
  open: boolean;
  onClose: () => void;
  onChange?: (score: number) => Promise<any>;
  title?: string;
  isLoading?: boolean;
  confirmation?: string;
};

const ScoreAction = ({
  open,
  onClose,
  title = 'common:scoreConfirmation',
  onChange,
  isLoading,
}: ScoreActionProps) => {
  const { t } = useTranslation('common');
  const { isData, setDataError, dataError, cancelCountdown } = useAction({ open, onClose });
  const _title = isData ? <TransTypography message='common:bulk:score.title' /> : t(title);
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(scoreSchema),
    defaultValues: { score: 0 },
  });

  const onSubmit = handleSubmit((values) => {
    onChange?.(values?.score)?.then(({ data }: { data: IDataSummary }) => {
      setDataError(data);
    });
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      maxWidth='xs'
    >
      <DialogTitle id='alert-dialog-title'>{_title}</DialogTitle>
      <DialogContent>
        <ConditionContainer active={!isData} alternative={<DeleteSummary data={dataError as IDataSummary} />}>
          <Box sx={{ mt: '40px' }}>
            <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
              <ScoreForm />
            </Form>
          </Box>
        </ConditionContainer>
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={onClose}>
          {cancelCountdown !== null ? `${t('cancel')} (${cancelCountdown}s)` : t('cancel')}
        </Button>
        {!isData && (
          <LoadingButton form='form' type='submit' autoFocus variant={'contained'} loading={isLoading}>
            {t('common:confirmation.confirm')}
          </LoadingButton>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ScoreAction;
