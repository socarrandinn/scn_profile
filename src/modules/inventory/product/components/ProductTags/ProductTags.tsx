import { memo, useCallback, useEffect, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { Divider, Stack } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { mapGetOneErrors } from 'constants/errors';
import ProductDetailTagsUpdateContainer from '../../containers/ProductTabs/ProductDetailTagsUpdateContainer';
import TagItem from 'modules/inventory/settings/tags/components/TagsContentForm/TagItem/TagItem';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { ProductSupplierTags } from '../ProductSupplierTags';
import { useMapperRequiredTags } from 'modules/inventory/settings/tags/hooks/useMapperRequiredTags';
import { ITagsMap, TAG_NAMES } from 'modules/inventory/settings/tags/interfaces';
import { useTagStore } from 'modules/inventory/settings/tags/contexts/useTagStore';
import { PRODUCT_PERMISSIONS } from '../../constants';

const ProductTags = () => {
  const { t } = useTranslation('product');
  const { isLoading, error, product, onOneClose, onOneToggle, state } = useProductDetail();
  const open = useMemo(() => state?.form_3 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_3'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_3'), [onOneClose]);
  const { mapperTagValue, mapperArrayValue, totalTags } = useMapperRequiredTags(TAG_NAMES.PRODUCT);
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
    <>
      <FormPaper title={t('tags:summary.select')} actions={
        <FormPaperAction
          onToggle={handleToggle}
          open={open}
          permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE}
        />
      }>
        {isLoading && '...'}
        {error && <HandlerError error={error} mapError={mapGetOneErrors} />}
        {!isLoading && !error && open ? (
          <ProductDetailTagsUpdateContainer
            initValue={payload}
            dataError={error}
            loadingInitData={isLoading}
            onClose={handleClose}
          />
        ) : (
          <Stack gap={{ xs: 1, md: 2 }} divider={<Divider flexItem />}>
            {productTabs &&
              productTabs?.map((tag) => (
                <TagItem key={tag?._id} tag={tag} sx={{ background: '#E9E9E9', border: 'none' }} />
              ))}
          </Stack>
        )}
      </FormPaper>

      {product?.tags?.supplier?.length ? <ProductSupplierTags supplierTags={mapperArrayValue(product?.tags?.supplier)} /> : null}
    </>
  );
};

export default memo(ProductTags);
