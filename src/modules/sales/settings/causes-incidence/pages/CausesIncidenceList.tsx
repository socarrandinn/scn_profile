import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import CausesIncidenceListContainer from 'modules/sales/settings/causes-incidence/containers/CausesIncidenceListContainer';
import { causesIncidenceFilters } from '../constants/causes-incidence.filters';
import { causesIncidenceViewTabs } from '../constants/causes-incidence.viewtabs';

const CausesIncidenceList = () => {
  const { t } = useTranslation('causesIncidence');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'causes-incidences'} filters={causesIncidenceFilters}>
        <FilterViewProvider views={causesIncidenceViewTabs}>
          <CausesIncidenceListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(CausesIncidenceList);
