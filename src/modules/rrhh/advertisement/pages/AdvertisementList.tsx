import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import AdvertisementListContainer from 'modules/rrhh/advertisement/containers/AdvertisementListContainer';
import { advertisementFilters } from 'modules/rrhh/advertisement/constants/advertisement.filters';

const AdvertisementList = () => {
  const { t } = useTranslation('advertisement');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'advertisements'} filters={advertisementFilters}>
        <AdvertisementListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(AdvertisementList);
