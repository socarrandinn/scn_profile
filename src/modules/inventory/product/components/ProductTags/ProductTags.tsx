import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useToggle } from '@dfl/hook-utils';
import { Stack } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { mapGetOneErrors } from 'constants/errors';
import ProvidersFormPaperActions from '../ProductGeneralProviders/ProvidersFormPaperActions';
import ProductDetailTagsUpdateContainer from '../../containers/ProductTabs/ProductDetailTagsUpdateContainer';
import { ProductTagItem } from '../ProductTagsForm/ProductTagItem';

const ProductTags = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  if (isOpen) {
    return (
      <FormPaper
        actions={
          <ProvidersFormPaperActions label={t('section.summary.tags.title')} onToggle={onToggle} open={isOpen} />
        }
      >
        <ProductDetailTagsUpdateContainer
          initValue={{
            _id: product?._id,
            tags: product?.tags,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper
      actions={<ProvidersFormPaperActions label={t('section.summary.tags.title')} onToggle={onToggle} open={isOpen} />}
    >
      {isLoading && '...'}
      {error && <HandlerError error={error} mapError={mapGetOneErrors} />}
      {!isLoading && !error && (
        <Stack gap={{ xs: 2, md: 3 }}>
          {product?.tags?.map((tag) => (
            <ProductTagItem key={tag?._id} tag={tag} />
          ))}
        </Stack>
      )}
    </FormPaper>
  );
};

export default memo(ProductTags);
