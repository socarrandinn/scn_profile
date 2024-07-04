import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import ProductDiscountListContainer from 'modules/sales-offer/product-discount/containers/ProductDiscountListContainer';
import { productDiscountFilters } from 'modules/sales-offer/product-discount/constants/product-discount.filters';

const ProductDiscountList = () => {
  const { t } = useTranslation('productDiscount');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'productDiscounts'} filters={productDiscountFilters}>
        <ProductDiscountListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ProductDiscountList);
