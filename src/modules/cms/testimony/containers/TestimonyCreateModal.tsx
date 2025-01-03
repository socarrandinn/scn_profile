import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useTestimonyCreateForm from 'modules/cms/testimony/hooks/useTestimonyCreateForm';
import { ITestimony } from 'modules/cms/testimony/interfaces';
import { TestimonyForm, TestimonyFormSkeleton } from 'modules/cms/testimony/components/TestimonyForm';

type TestimonyCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: ITestimony;
  onClose: () => void;
};
const TestimonyCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: TestimonyCreateModalProps) => {
  const { t } = useTranslation('testimony');
  const { control, onSubmit, isLoading, reset, error, formState } = useTestimonyCreateForm(onClose, initValue);
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'testimony-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<TestimonyFormSkeleton />}>
            <TestimonyForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(TestimonyCreateModal);
