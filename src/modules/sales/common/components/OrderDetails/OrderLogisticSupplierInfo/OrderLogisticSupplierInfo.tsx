import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormPaper } from 'modules/common/components/FormPaper';

// todo
const OrderLogisticSupplierInfo = () => {
  const { t } = useTranslation('order');
  // const { isLoading, data, error } = useOrderProviders();

  // if (isLoading) return <OrderInfoSkeleton row={2} />;

  return (
    <FormPaper title={t('logistics')}>
      FALTA POR DEFINIR
      {/*  <ProviderItemList providers={data} error={error} loading={isLoading} type={ProviderType.LOGISTIC} /> */}
    </FormPaper>
  );
};

export default memo(OrderLogisticSupplierInfo);
