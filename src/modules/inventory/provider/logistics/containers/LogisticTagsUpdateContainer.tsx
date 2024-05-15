import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { ILogistics } from '../interfaces';
import useLogisticTagsForm from '../hooks/useLogisticTagsForm';
import { SupplierTagsForm } from '../../supplier/components/SupplierTagsForm';
import SupplierTagsFormSkeleton from '../../supplier/components/SupplierTagsForm/SupplierTagsFormSkeleton';

type LogisticTagsUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<ILogistics>;
  onClose: () => void;
};

const LogisticTagsUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: LogisticTagsUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset } = useLogisticTagsForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<SupplierTagsFormSkeleton />}>
          <SupplierTagsForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='tags-form'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(LogisticTagsUpdateContainer);
