import DynamicTabs from 'modules/common/components/DynamicTabs/DynamicTabs';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useStoresTabs } from 'modules/inventory/provider/supplier/hooks/useStoresTabs';
import SupplierStoreProductTabSkeleton from 'modules/inventory/provider/supplier/components/SupplierStoreProductTab/SupplierStoreProductTabSkeleton';
import { LogisticInventoryTabPanel } from 'modules/inventory/provider/logistics/components/LogisticInventoryTabPanel';
import { useFindStoresByLogistic } from 'modules/inventory/provider/logistics/hooks/useFindStoreByLogistic';

const LogisticStoreProductTab = () => {
  const { t } = useTranslation('common');
  const { getTabs } = useStoresTabs();
  const { data, isLoading } = useFindStoresByLogistic();
  const tabs: any[] = useMemo(() => getTabs(data?.data) || [], [data?.data]);

  if (isLoading) return <SupplierStoreProductTabSkeleton />;

  return <DynamicTabs tabs={tabs} title={t('stores')} component={LogisticInventoryTabPanel} />;
};

export default memo(LogisticStoreProductTab);
