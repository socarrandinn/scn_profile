import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import ProductDetailPriceUpdateContainer from 'modules/inventory/product/containers/ProductTabs/ProductDetailPriceUpdateContainer';

const ProductPrice = () => {
  const { t } = useTranslation('product');
  const { isLoading, error, product } = useProductDetail();

  return (
    <FormPaper nm title={t('section.prices.information')} sx={{ maxWidth: 1250, marginX: 'auto' }}>
      <ProductDetailPriceUpdateContainer
        initValue={{
          _id: product?._id,
          priceDetails: product?.priceDetails,
        }}
        dataError={error}
        loadingInitData={isLoading}
      />
    </FormPaper>
  );
};

export default memo(ProductPrice);
