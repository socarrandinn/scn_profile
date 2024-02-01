import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider, FilterViewProvider } from '@dfl/mui-admin-layout';
import StoreProductListContainer from 'modules/inventory/store/containers/ProductSections/StoreProductListContainer';
import { productTabs } from 'modules/inventory/product/constants';
import { storeProductsFilters } from 'modules/inventory/store/constants/storeProducts.filters';
import { useParams } from 'react-router';
import { StoreContextProvider } from 'modules/inventory/provider/supplier/context/StoreProvider';

const StoreProductsListComponent = () => {
  const { t } = useTranslation('product');
  const { id } = useParams();

  return (
    // StoreContenxtProvider is required for product availability column
    <StoreContextProvider storeId={id || ''}>
      <PagePaperLayout title={t('list')} marginTop={{ xs: 2, md: 3 }}>
        <TableProvider id={'product'} filters={storeProductsFilters}>
          <FilterViewProvider views={productTabs}>
            <StoreProductListContainer />
          </FilterViewProvider>
        </TableProvider>
      </PagePaperLayout>
    </StoreContextProvider>
  );
};

export default memo(StoreProductsListComponent);
