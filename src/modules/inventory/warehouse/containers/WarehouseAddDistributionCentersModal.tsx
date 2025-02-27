import { memo, useCallback } from 'react';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { ConditionContainer, DialogForm, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { IAddWarehouses } from 'modules/inventory/distribution-centers/interfaces';
import useDistributionCentersWarehouseAddForm from 'modules/inventory/distribution-centers/hooks/useDistributionCentersWarehouseAddForm';

import {
  WarehouseAddDistributionCentersFormSkeleton,
  WarehouseAddDistributionCentersForm,
} from '../components/WarehouseAddDistributionCentersForm';

type WarehouseAddDistributionCentersModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: IAddWarehouses;
  onClose: () => void;
};
const WarehouseAddDistributionCentersModal = ({
  title = 'create',
  open,
  onClose,
  dataError,
  initValue,
  loadingInitData,
}: WarehouseAddDistributionCentersModalProps) => {
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
      aria-labelledby={'warehouse-add-distribution-center-creation-title'}
    >
      <DialogContent>
        {dataError && <HandlerError error={dataError} />}

        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<WarehouseAddDistributionCentersFormSkeleton />}>
            <WarehouseAddDistributionCentersForm
              error={error}
              isLoading={isLoading}
              control={control}
              onSubmit={onSubmit}
            />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant='grey' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='warehouse-distribution-center-form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(WarehouseAddDistributionCentersModal);
