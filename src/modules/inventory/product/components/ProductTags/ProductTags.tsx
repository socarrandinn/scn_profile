import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { Stack } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { mapGetOneErrors } from 'constants/errors';
import ProductDetailTagsUpdateContainer from '../../containers/ProductTabs/ProductDetailTagsUpdateContainer';
import TagItem from 'modules/inventory/settings/tags/components/TagsContentForm/TagItem/TagItem';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';

const ProductTags = () => {
  const { t } = useTranslation('product');
  const { isLoading, error, product, onOneClose, onOneToggle, state } = useProductDetail();
  const open = useMemo(() => state?.form_3 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_3'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_3'), [onOneClose]);

  const payload = useMemo(
    () => ({
      _id: product?._id,
      tags: product?.tags,
      // selectedTag: product?.tags,
    }),
    [product],
  );

  return (
    <FormPaper
      mbHeader={open ? '0px' : '17px'}
      title={t('section.summary.tags.title')}
      actions={<FormPaperAction onToggle={handleToggle} open={open} />}
    >
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
        <Stack gap={{ xs: 2, md: 3, }}>
          {product?.tags?.map((tag) => (
            <TagItem key={tag?._id} tag={tag} sx={{ background: '#E9E9E9', border: 'none' }} />
          ))}
        </Stack>
      )}
    </FormPaper>
  );
};

export default memo(ProductTags);
