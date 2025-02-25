import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import ExpressDeliveryListContainer from '../containers/ExpressDeliveryListContainer';

const ExpressDeliveryList = () => {
  return (
    <PageLayout>
      <TableProvider id={'express-deliveries'}>
        <ExpressDeliveryListContainer />
      </TableProvider>
    </PageLayout>
  );
};

export default memo(ExpressDeliveryList);
