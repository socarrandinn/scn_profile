import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import { useTranslation } from 'react-i18next';
import HomeDeliveryListContainer from '../containers/HomeDeliveryListContainer';

const LocationsList = () => {
  const { t } = useTranslation('homeDelivery');

  return (
    <PagePaperLayout title={t('destinations')}>
      <TableProvider id={'home-deliveries'}>
        <HomeDeliveryListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default LocationsList;
