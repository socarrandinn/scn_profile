import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import WorkLocationListContainer from 'modules/rrhh/settings/work-location/containers/WorkLocationListContainer';
import { workLocationFilters } from 'modules/rrhh/settings/work-location/constants/work-location.filters';

const WorkLocationList = () => {
  const { t } = useTranslation('workLocation');

  return (
    <PagePaperLayout title={t('workLocationList')}>
      <TableProvider id={'workLocations'} filters={workLocationFilters}>
        <WorkLocationListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(WorkLocationList);
