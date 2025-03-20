import { memo, useCallback } from 'react';
import PaymentMethodCreateModal from 'modules/sales/settings/payment-settings/containers/PaymentMethodCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOnePaymentMethod } from '../hooks/useFindOnePaymentMethod';
import { IPaymentSettings } from '../interfaces';
import { PRICE_TYPE } from 'modules/inventory/common/constants/price-type.enum';
import { PAYMENT_GATEWAYS_ENUM } from 'modules/sales/common/constants/order-payments';

const initValues: IPaymentSettings = {
  minAmount: 0,
  maxAmount: 0,
  currency: [],
  tax: {
    type: PRICE_TYPE.FIXED,
    value: 0,
  },
  gatewayConfig: [
    {
      currency: [],
      gateway: PAYMENT_GATEWAYS_ENUM.STRIPE,
      enabled: false,
    },
  ],
};

const PaymentMethodEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const entityId = searchParams.get('edit');

  const { isLoading, data, error } = useFindOnePaymentMethod(entityId);

  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit');
    setSearchParams(searchParams);
  }, [entityId, searchParams, setSearchParams]);

  if (isLoading) return <></>;

  return (
    <PaymentMethodCreateModal
      title={`order:payment.method.${data?.methodType as string}`}
      open={!!entityId}
      methodId={entityId as string}
      onClose={handleCloseEdit}
      initValue={data?.settings || initValues}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(PaymentMethodEditModal);
