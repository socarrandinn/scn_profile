import { memo, useCallback, useEffect, useMemo } from 'react';
import { ConditionContainer, HandlerError } from '@dfl/mui-react-common';
import { Box, Button, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import ProductScoreInformationFormSkeleton from 'modules/inventory/product/components/ProductScoreForm/ProductScoreInformationFormSkeleton';
import { mapGetOneErrors } from 'constants/errors';
import { IProductCreate } from '../../interfaces/IProductCreate';
import useProductTagsCreateForm from '../../hooks/useProductTagsCreateForm';
import TagsEditForm from 'modules/inventory/settings/tags/components/TagsContentForm/TagsEditForm';
import { ITagsMap, TAG_NAMES } from 'modules/inventory/settings/tags/interfaces';
import { useMapperRequiredTags } from 'modules/inventory/settings/tags/hooks/useMapperRequiredTags';
import { useTagStore } from 'modules/inventory/settings/tags/contexts/useTagStore';
import { useProductDetail } from '../../contexts/ProductDetail';

type ProductDetailTagsUpdateContainerProps = {
  loadingInitData?: boolean;
  dataError?: any;
  initValue?: Partial<IProductCreate>;
  onClose: () => void;
};

type Props = {
  onClose: VoidFunction;
};

const ProductDetailTagsUpdateContainer = ({ onClose }: Props) => {
  const { product, isLoading, error } = useProductDetail();
  const { mapperTagValue, totalTags, isTagLoading } = useMapperRequiredTags(TAG_NAMES.PRODUCT);
  const { setTotalTag } = useTagStore();
  const { payload, productTabs } = useMemo(() => {
    const productTabs = mapperTagValue((product?.tags?.product as unknown as ITagsMap) || {});

    return {
      productTabs,
      payload: {
        _id: product?._id,
        tags: {
          supplier: product?.tags?.supplier,
          product: productTabs,
        },
      },
    };
  }, [mapperTagValue, product?._id, product?.tags]);

  useEffect(() => {
    setTotalTag(productTabs?.length === totalTags);
  }, [setTotalTag, productTabs, totalTags]);

  return (
    <ProductDetailTagsUpdate
      initValue={payload}
      dataError={error}
      loadingInitData={isLoading || isTagLoading}
      onClose={onClose}
    />
  );
};

const ProductDetailTagsUpdate = ({
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
          <TagsEditForm
            error={error}
            isLoading={isLoading}
            control={control}
            onSubmit={onSubmit}
            tagName={TAG_NAMES.PRODUCT}
          />
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
