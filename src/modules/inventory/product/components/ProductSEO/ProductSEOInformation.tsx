import { memo } from 'react';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import ProductDetailSEOUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailSEOUpdateContainer';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';

const ProductSEOInformation = () => {
  const { t } = useTranslation('product');
  const { isLoading, error, product } = useProductDetail();

  return (
    <FormPaper nm title={t('section.seo.title')}>
      <ProductDetailSEOUpdateContainer
        initValue={{
          _id: product?._id,
          seo: product?.seo,
        }}
        dataError={error}
        loadingInitData={isLoading}
      />
    </FormPaper>
  );
};

export default memo(ProductSEOInformation);
