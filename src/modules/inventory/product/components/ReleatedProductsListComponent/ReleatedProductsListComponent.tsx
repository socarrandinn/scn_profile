import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { productTabs } from 'modules/inventory/product/constants';
import { storeProductsFilters } from 'modules/inventory/store/constants/storeProducts.filters';
import { useParams } from 'react-router';
import { StoreContextProvider } from 'modules/inventory/provider/supplier/context/StoreProvider';
import ReleatedProductListContainer from '../../containers/ProductTabs/ReleatedProductListContainer';

const ReleatedProductsListComponent = () => {
  const { t } = useTranslation('product');
  const { id } = useParams();

  return (
        <StoreContextProvider storeId={id || ''}>
            <PagePaperLayout margin={0} title={t('section.relatedProducts.title')}>
                <TableProvider id={'product'} filters={storeProductsFilters}>
                    <FilterViewProvider views={productTabs}>
                        <ReleatedProductListContainer/>
                    </FilterViewProvider>
                </TableProvider>
            </PagePaperLayout>
        </StoreContextProvider>
  );
};

export default memo(ReleatedProductsListComponent);
