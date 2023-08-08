import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import ProductsListContainer from 'modules/store/provider/products/containers/ProductsListContainer';
import { productsFilters } from 'modules/store/provider/products/constants/products.filters';

const ProductsList = () => {
  const { t } = useTranslation('products');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'products'} filters={productsFilters}>
        <ProductsListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ProductsList);
