import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { HandlerError } from '@dfl/mui-react-common';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import { FormPaper } from 'modules/common/components/FormPaper';
import OrderDriverInfoSkeleton from './OrderDriverInfoSkeleton';
import SubOrderDriverForm from 'modules/sales/sub-orders/components/SubOrderDriverForm/SubOrderDriverForm';
import useSubOrderDriverForm from 'modules/sales/sub-orders/hooks/useSubOrderDriverForm';

const OrderDriverInfo = () => {
  const { t } = useTranslation('subOrder');
  const { isLoading, /* order, */ error } = useOrderContext();
  const { control, error: driverError, isLoading: isDriverLoading, onSubmit } = useSubOrderDriverForm();

  if (isLoading) {
    return (
      <FormPaper nm title={t('section.transport')}>
        <OrderDriverInfoSkeleton />;
      </FormPaper>
    );
  }

  if (error) {
    return (
      <FormPaper nm title={t('section.transport')}>
        <HandlerError error={error} />
      </FormPaper>
    );
  }

  return (
    <FormPaper nm title={t('section.transport')}>
      <SubOrderDriverForm error={driverError} control={control} isLoading={isDriverLoading} onSubmit={onSubmit} />
    </FormPaper>
  );
};

export default memo(OrderDriverInfo);
