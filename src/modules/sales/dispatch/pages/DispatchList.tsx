import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import DispatchListContainer from 'modules/sales/dispatch/containers/DispatchListContainer';
import { dispatchFilters } from 'modules/sales/dispatch/constants/dispatch.filters';
import { dispatchTabs } from '../constants/dispatch-tabs';

const DispatchList = () => {
  const { t } = useTranslation('dispatch');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'dispatches'} filters={dispatchFilters}>
        <FilterViewProvider views={dispatchTabs}>
          <DispatchListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(DispatchList);
