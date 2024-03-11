import { TableProvider } from '@dfl/mui-admin-layout';
import { PagePaperLayout } from 'layouts/index';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import LogisticProductListContainer from '../containers/LogisticProductListContainer';
import { supplierProductTabFilters } from 'modules/inventory/product/constants';

const LogisticProductPage = () => {
  const { t } = useTranslation('product');
  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'logistic-products'} filters={supplierProductTabFilters}>
        <LogisticProductListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(LogisticProductPage);
