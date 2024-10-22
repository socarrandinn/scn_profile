import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { HandlerError } from '@dfl/mui-react-common';
import OrderHistory from './OrderHistory';
import { IStatusHistory } from '../../../interfaces/IStatusHistory';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import OrderInfoSkeleton from '../OrderShippingInfo/OrderInfoSkeleton';
import { FormPaper } from 'modules/common/components/FormPaper';

const OrderActivitiesInfo = () => {
  const { t } = useTranslation('order');
  const { isLoading, order, error } = useOrderContext();
  if (isLoading) return <OrderInfoSkeleton />;

  if (error) {
    return (
      <FormPaper nm title={t('section.activity')}>
        <HandlerError error={error} />
      </FormPaper>
    );
  }

  return (
    <FormPaper nm title={t('section.activity')}>
      <OrderHistory
        order={order}
        activities={order?.statusHistory as IStatusHistory[]}
        owner={order?.owner as IUser}
        createdAt={order?.createdAt as string}
        format='PPpp'
      />
    </FormPaper>
  );
};

export default memo(OrderActivitiesInfo);
