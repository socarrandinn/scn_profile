import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { productFilters, productTabs } from 'modules/inventory/product/constants';
import RelatedProductListContainer from '../../containers/ProductTabs/RelatedProductListContainer';

const RelatedProductsListComponent = () => {
  const { t } = useTranslation('product');

  return (
    <PagePaperLayout title={t('section.relatedProducts.title')}>
      <TableProvider id={'related-product'} filters={productFilters}>
        <FilterViewProvider views={productTabs}>
          <RelatedProductListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(RelatedProductsListComponent);
