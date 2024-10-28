import { memo } from 'react';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import { TableProvider } from '@dfl/mui-admin-layout';
import LogisticProductListContainer from '../../containers/LogisticProductListContainer';
import { supplierProductTabFilters } from 'modules/inventory/product/constants';

const LogisticProductsPage = () => {
  const { t } = useTranslation('product');
  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'logistic-products'} filters={supplierProductTabFilters}>
        <LogisticProductListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(LogisticProductsPage);
