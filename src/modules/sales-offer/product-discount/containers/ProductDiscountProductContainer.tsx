import { PagePaperLayout } from 'layouts/index';
import { productFilters, productTabs } from 'modules/inventory/product/constants';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ProductDiscountProductListContainer from './ProductDiscountProductListContainer';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';

const ProductDiscountProductContainer = () => {
  const { t } = useTranslation('product');
  return (
    <PagePaperLayout mt={{ xs: 1, md: 2 }} title={t('list')}>
      <TableProvider id='product-discount-details' filters={productFilters}>
        <FilterViewProvider views={productTabs} defaultView={'all'}>
          <ProductDiscountProductListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ProductDiscountProductContainer);
