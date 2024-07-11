import { memo, useCallback } from 'react';
import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import ProductScoreInformationFormSkeleton from 'modules/inventory/product/components/ProductScoreForm/ProductScoreInformationFormSkeleton';
import { mapGetOneErrors } from 'constants/errors';
import { IProductCreate } from '../../interfaces/IProductCreate';
import useProductTagsCreateForm from '../../hooks/useProductTagsCreateForm';
import TagsEditForm from 'modules/inventory/settings/tags/components/TagsContentForm/TagsEditForm';

type ProductDetailTagsUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IProductCreate>;
  onClose: () => void;
};

const ProductDetailTagsUpdateContainer = ({
  dataError,
  initValue,
  loadingInitData,
  onClose,
}: ProductDetailTagsUpdateContainerProps) => {
  const { t } = useTranslation('common');
  const { control, onSubmit, isLoading, error, reset } = useProductTagsCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [reset, onClose]);

  return (
    <Box>
      {dataError && <HandlerError error={dataError} mapError={mapGetOneErrors} />}
      {!dataError && (
        <ConditionContainer active={!loadingInitData} alternative={<ProductScoreInformationFormSkeleton />}>
          <TagsEditForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} />
        </ConditionContainer>
      )}

      <Stack mt={{ xs: 1, md: 3 }} gap={1} justifyContent={'end'} direction={'row'}>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isLoading || loadingInitData}
          disabled={!!dataError}
          form='form-tags'
        >
          {t('common:save')}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default memo(ProductDetailTagsUpdateContainer);
