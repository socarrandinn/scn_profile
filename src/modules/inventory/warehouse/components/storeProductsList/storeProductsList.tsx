import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import StoreProductListContainer from 'modules/inventory/warehouse/containers/ProductSections/StoreProductListContainer';
import { productTabs } from 'modules/inventory/product/constants';
import { warehouseProductsFilters } from 'modules/inventory/warehouse/constants/warehouse-products.filters';
import { useParams } from 'react-router';
import { StoreContextProvider } from 'modules/inventory/provider/supplier/context/StoreProvider';

const StoreProductsListComponent = () => {
  const { t } = useTranslation('product');
  const { id } = useParams();

  return (
    <StoreContextProvider warehouseId={id || ''}>
      <PagePaperLayout margin={0} title={t('list')}>
        <TableProvider id={'product'} filters={warehouseProductsFilters}>
          <FilterViewProvider views={productTabs}>
            <StoreProductListContainer />
          </FilterViewProvider>
        </TableProvider>
      </PagePaperLayout>
    </StoreContextProvider>
  );
};

export default memo(StoreProductsListComponent);
