import { PagePaperLayout } from 'layouts/index';
import { ProductsListConfig } from 'modules/inventory/product/components/ProductsListConfig';
import { productFilters } from 'modules/inventory/product/constants';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ProductDiscountProductListContainer from './ProductDiscountProductListContainer';

const ProductDiscountProductContainer = () => {
  const { t } = useTranslation('product');
  return (
    <PagePaperLayout mt={{ xs: 1, md: 2 }} title={t('list')}>
      <ProductsListConfig id='product-discount-details' filters={productFilters}>
        <ProductDiscountProductListContainer />
      </ProductsListConfig>
    </PagePaperLayout>
  );
};

export default memo(ProductDiscountProductContainer);
