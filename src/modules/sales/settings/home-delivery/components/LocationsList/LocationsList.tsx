import { PagePaperLayout } from 'layouts/index'
import HomeDeliveryListContainer from '../../containers/HomeDeliveryListContainer';
import { TableProvider } from '@dfl/mui-admin-layout';
import { useTranslation } from 'react-i18next';

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
