import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { HandlerError } from '@dfl/mui-react-common';
import OrderHistory from './OrderHistory';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import OrderInfoSkeleton from '../OrderShippingInfo/OrderInfoSkeleton';
import { FormPaper } from 'modules/common/components/FormPaper';
import { IStatusHistory } from 'modules/sales/common/interfaces/IStatusHistory';

const OrderActivitiesInfo = () => {
  const { t } = useTranslation('order');
  const { isLoading, order, error } = useOrderContext();

  const statusHistory = useMemo(() => order?.statusHistory?.reverse(), [order?.statusHistory]);

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
        activities={statusHistory as IStatusHistory[]}
        owner={order?.owner as IUser}
        format='PPpp'
      />
    </FormPaper>
  );
};

export default memo(OrderActivitiesInfo);
