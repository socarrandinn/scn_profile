import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import StockReductionCauseListContainer from 'modules/inventory/settings/stock-reduction-cause/containers/StockReductionCauseListContainer';
import { stockReductionCauseFilters } from 'modules/inventory/settings/stock-reduction-cause/constants/stock-reduction-cause.filters';

const StockReductionCauseList = () => {
  const { t } = useTranslation('stockReductionCause');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'stockReductionCauses'} filters={stockReductionCauseFilters}>
        <StockReductionCauseListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(StockReductionCauseList);
