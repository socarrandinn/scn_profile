import DynamicTabs from 'modules/common/components/DynamicTabs/DynamicTabs';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useStoresTabs } from 'modules/inventory/provider/supplier/hooks/useStoresTabs';
import SupplierStoreProductTabSkeleton from 'modules/inventory/provider/supplier/components/SupplierStoreProductTab/SupplierStoreProductTabSkeleton';
import { LogisticInventoryTabPanel } from 'modules/inventory/provider/logistics/components/LogisticInventoryTabPanel';
import { useFindStoresByLogistic } from 'modules/inventory/provider/logistics/hooks/useFindStoreByLogistic';
import { useLogisticsDetailContext } from '../../context/LogisticDetail';

const LogisticStoreProductTab = () => {
  const { t } = useTranslation('common');
  const { getTabs } = useStoresTabs();
  const { logisticId } = useLogisticsDetailContext();
  const { data, isLoading } = useFindStoresByLogistic(logisticId as string);
  const tabs: any[] = useMemo(() => getTabs(data?.data) || [], [data?.data, getTabs]);

  if (isLoading) return <SupplierStoreProductTabSkeleton />;

  return <DynamicTabs tabs={tabs} title={t('warehouses')} component={LogisticInventoryTabPanel} />;
};

export default memo(LogisticStoreProductTab);
