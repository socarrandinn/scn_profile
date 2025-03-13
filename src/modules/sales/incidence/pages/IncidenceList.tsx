import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import IncidenceListContainer from 'modules/sales/incidence/containers/IncidenceListContainer';
import { incidenceFilters } from 'modules/sales/incidence/constants/incidence.filters';

const IncidenceList = () => {
  const { t } = useTranslation('incidence');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'incidences'} filters={incidenceFilters}>
        <IncidenceListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(IncidenceList);
