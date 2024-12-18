import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageLayout, PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import { HelperText } from '../../warehouse-area/components/HelperText';
import { productFeatureFilters } from '../constants/product-feature.filters';
import ProductFeatureListContainer from '../containers/ProductFeatureListContainer';

const ProductFeatureList = () => {
  const { t } = useTranslation('productFeatures');

  return (
    <PageLayout>
      <HelperText text={t('description')} />
      <PagePaperLayout title={t('list')} mb={3}>
        <TableProvider id={'product-features'} filters={productFeatureFilters}>
          <ProductFeatureListContainer />
        </TableProvider>
      </PagePaperLayout>
    </PageLayout>
  );
};

export default memo(ProductFeatureList);
