import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useToggle } from '@dfl/hook-utils';
import { OrganizationFormPaperActions } from 'modules/inventory/product/components/ProductGeneralOrganization/';
import { Typography } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { mapGetOneErrors } from 'constants/errors';
import ProductDetailReleatedProductsUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailReleatedProductsUpdateContainer';

const ProductGeneralRelatedProducts = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, product } = useProductDetail();

  if (isOpen) {
    return (
      <FormPaper
        actions={
          <OrganizationFormPaperActions label={t('section.relatedProducts.title')} onToggle={onToggle} open={isOpen} />
        }
      >
        <ProductDetailReleatedProductsUpdateContainer
          initValue={{
            _id: product?._id,
            related: product?.related,
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
      actions={
        <OrganizationFormPaperActions label={t('section.relatedProducts.title')} onToggle={onToggle} open={isOpen} />
      }
    >
      {isLoading && '...'}
      {error && <HandlerError error={error} mapError={mapGetOneErrors} />}
      {!isLoading &&
        !error &&
        product?.related !== undefined &&
        product?.related.map((iten: any) => (
          <Typography key={iten.id} color={'#9c9c9c'}>
            {iten?.name || ''}
          </Typography>
        ))}
    </FormPaper>
  );
};

export default memo(ProductGeneralRelatedProducts);
