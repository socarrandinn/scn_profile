import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { IManufacture } from '../interfaces';
import useManufactureTagsUpdateForm from '../hooks/useManufactureTagsUpdateForm';
import SupplierTagsFormSkeleton from '../../supplier/components/SupplierTagsForm/SupplierTagsFormSkeleton';
import { SupplierTagsForm } from '../../supplier/components/SupplierTagsForm';

type ManufactureTagsUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IManufacture>;
  onClose: () => void;
  title?: string;
};

const ManufactureTagsUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
  title,
}: ManufactureTagsUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset, formState } = useManufactureTagsUpdateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<SupplierTagsFormSkeleton />}>
          <SupplierTagsForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button variant='grey' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!formState?.isDirty || !!dataError}
          form='tags-form'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(ManufactureTagsUpdateContainer);
