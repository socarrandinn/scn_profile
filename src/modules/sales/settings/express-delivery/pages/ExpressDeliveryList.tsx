import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import ExpressDeliveryListContainer from '../containers/ExpressDeliveryListContainer';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';

const ExpressDeliveryList = () => {
  const { t } = useTranslation('homeDelivery');

  return (
    <PagePaperLayout title={t('destinations')}>
      <TableProvider id={'express-deliveries'}>
        <ExpressDeliveryListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ExpressDeliveryList);
