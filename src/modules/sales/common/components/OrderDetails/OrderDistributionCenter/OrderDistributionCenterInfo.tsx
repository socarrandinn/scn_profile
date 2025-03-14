import { FormPaper } from 'modules/common/components/FormPaper';
import OrderDistributionCenter from './OrderDistributionCenter';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import OrderInfoSkeleton from '../OrderShippingInfo/OrderInfoSkeleton';
import { HandlerError } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';

type Props = {
  nm?: boolean;
};
const OrderDistributionCenterInfo = ({ nm = false }: Props) => {
  const { t } = useTranslation();
  const { order, isLoading, error } = useOrderContext();

  if (isLoading) {
    return (
      <FormPaper nm={nm} title={t('distributionCenters:name')}>
        <OrderInfoSkeleton row={2} />
      </FormPaper>
    );
  }

  if (error) {
    return (
      <FormPaper nm={nm} title={t('distributionCenters:name')}>
        <HandlerError error={error} />
      </FormPaper>
    );
  }
  return (
    <FormPaper nm={nm} title={t('distributionCenters:name')}>
      <OrderDistributionCenter distributionCenter={order?.distributionCenter as any} showLogistic />
    </FormPaper>
  );
};

export default OrderDistributionCenterInfo;
