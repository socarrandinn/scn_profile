import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { ISupplier } from '../interfaces';
import { SIGNUP_ERRORS } from 'modules/authentication/constants/login.errors';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import SupplierTagsFormSkeleton from '../components/SupplierTagsForm/SupplierTagsFormSkeleton';
import useSupplierTagsForm from '../hooks/useSupplierTagsForm';
import TagsEditForm from 'modules/inventory/settings/tags/components/TagsContentForm/TagsEditForm';

type ProductDetailTagsUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<ISupplier>;
  onClose: () => void;
  title?: string;
};

const ProductDetailTagsUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
  title,
}: ProductDetailTagsUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset, formState } = useSupplierTagsForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} errors={SIGNUP_ERRORS} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<SupplierTagsFormSkeleton />}>
          <TagsEditForm title={title} error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button variant='grey' onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!formState?.isDirty || !!dataError}
          form='form-tags'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(ProductDetailTagsUpdateContainer);
