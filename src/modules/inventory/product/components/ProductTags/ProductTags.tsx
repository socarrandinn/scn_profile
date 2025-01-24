import { memo, useCallback, useMemo } from 'react';
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
import { PRODUCT_PERMISSIONS } from '../../constants';
import { useMapperTagsList } from 'modules/inventory/settings/tags/hooks/useMapperTagsList';
import { ISummaryTags } from 'modules/inventory/settings/tags/interfaces';

const ProductTags = () => {
  const { t } = useTranslation('product');
  const { isLoading, error, product, onOneClose, onOneToggle, state } = useProductDetail();
  const open = useMemo(() => state?.form_3 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_3'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_3'), [onOneClose]);

  const { requiredTagList } = useMapperTagsList();

  return (
    <>
      <FormPaper
        title={t('tags:summary.select')}
        actions={
          <FormPaperAction onToggle={handleToggle} open={open} permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE} />
        }
      >
        {isLoading && '...'}
        {error && <HandlerError error={error} mapError={mapGetOneErrors} />}
        {!isLoading && !error && open ? (
          <ProductDetailTagsUpdateContainer onClose={handleClose} />
        ) : (
          <Stack gap={{ xs: 1, md: 2 }} divider={<Divider flexItem />}>
            {product?.tags?.product &&
              requiredTagList(product?.tags?.product as unknown as Record<string, ISummaryTags>)?.map((tag) => (
                <TagItem key={tag?._id} tag={tag} />
              ))}
          </Stack>
        )}
      </FormPaper>

      {product?.tags?.supplier?.length ? <ProductSupplierTags supplierTags={product?.tags?.supplier} /> : null}
    </>
  );
};

export default memo(ProductTags);
