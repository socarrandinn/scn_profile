import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { IAddWarehouses } from '../interfaces';
import useDistributionCentersWarehouseAddForm from '../hooks/useDistributionCentersWarehouseAddForm';
import DistributionCenterWarehousesForm from '../components/DistributionCenterWarehousesForm/DistributionCenterWarehousesForm';
import { DistributionCenterWarehousesFormSkeleton } from '../components/DistributionCenterWarehousesForm';

type DistributionCentersWarehouseAddModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IAddWarehouses;
  onClose: () => void;
};
const DistributionCentersWarehouseAddModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: DistributionCentersWarehouseAddModalProps) => {
  const { t } = useTranslation('distributionCenters');
  const { control, onSubmit, isLoading, reset, error } = useDistributionCentersWarehouseAddForm(onClose, initValue);
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
          <ConditionContainer active={!loadingInitData} alternative={<DistributionCenterWarehousesFormSkeleton />}>
            <DistributionCenterWarehousesForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
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
          form='distribution-center-warehouse-form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(DistributionCentersWarehouseAddModal);
