import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import CausesIncidenceListContainer from 'modules/sales/settings/causes-incidence/containers/CausesIncidenceListContainer';
import { causesIncidenceFilters } from 'modules/sales/settings/causes-incidence/constants/causes-incidence.filters';

const CausesIncidenceList = () => {
  const { t } = useTranslation('causesIncidence');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'causesIncidences'} filters={causesIncidenceFilters}>
        <CausesIncidenceListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(CausesIncidenceList);
