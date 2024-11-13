import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import useDistributionCentersCreateForm from 'modules/inventory/distribution-centers/hooks/useDistributionCentersCreateForm';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';
import { DistributionCentersForm, DistributionCentersFormSkeleton } from 'modules/inventory/distribution-centers/components/DistributionCentersForm';

type DistributionCentersCreateModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IDistributionCenters;
  onClose: () => void;
};
const DistributionCentersCreateModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: DistributionCentersCreateModalProps) => {
  const { t } = useTranslation('distributionCenters');
  const { control, onSubmit, isLoading, reset, error } = useDistributionCentersCreateForm(onClose, initValue);
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
      aria-labelledby={'distributionCenters-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<DistributionCentersFormSkeleton />}>
            <DistributionCentersForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={handleClose}>{t('common:cancel')}</Button>
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

export default memo(DistributionCentersCreateModal);
