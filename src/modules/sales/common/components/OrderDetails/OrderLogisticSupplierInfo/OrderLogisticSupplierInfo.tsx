import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PaperSection } from 'components/PaperSection';

// todo
const OrderLogisticSupplierInfo = () => {
  const { t } = useTranslation('order');
  // const { isLoading, data, error } = useOrderProviders();

  // if (isLoading) return <OrderInfoSkeleton row={2} />;

  return (
    <PaperSection title={t('logistics')}>
      FALTA POR DEFINIR
      {/*  <ProviderItemList providers={data} error={error} loading={isLoading} type={ProviderType.LOGISTIC} /> */}
    </PaperSection>
  );
};

export default memo(OrderLogisticSupplierInfo);
