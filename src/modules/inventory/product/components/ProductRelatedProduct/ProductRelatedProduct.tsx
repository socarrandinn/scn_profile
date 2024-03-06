import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import ProductDetailRelatedProductUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailRelatedProductUpdateContainer';

const ProductRelatedProduct = () => {
  const { t } = useTranslation('product');
  const { isLoading, error, product } = useProductDetail();

  return (
    <FormPaper
      nm
      title={t('section.prices.information')}
    >
      <ProductDetailRelatedProductUpdateContainer
        initValue={{
          _id: product?._id,
          related: product?.related || [],
        }}
        dataError={error}
        loadingInitData={isLoading}
      />
    </FormPaper>
  );
};

export default memo(ProductRelatedProduct);
