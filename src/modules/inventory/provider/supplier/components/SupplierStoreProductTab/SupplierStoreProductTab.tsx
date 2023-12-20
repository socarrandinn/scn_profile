import DynamicTabs from 'modules/common/components/DynamicTabs/DynamicTabs';
import { memo, useMemo } from 'react';
import { useStoresTabs } from '../../hooks/useStoresTabs';
import SupplierInventoryTabPanner from '../SupplierInventoryListSummary/SupplierInventoryTabPanner';
import { useTranslation } from 'react-i18next';
import SupplierStoreProductTabSkeleton from './SupplierStoreProductTabSkeleton';
import { useAllStoresContext } from 'modules/inventory/store/context/StoresContext';

const SupplierStoreProductTab = () => {
  const { t } = useTranslation('common');
  const { getTabs } = useStoresTabs();
  const { data, isLoading } = useAllStoresContext();
  const tabs: any[] = useMemo(() => getTabs(data?.data) || [], []);

  if (isLoading) return <SupplierStoreProductTabSkeleton />;

  return <DynamicTabs tabs={tabs} title={t('stores')} component={SupplierInventoryTabPanner} />;
};

export default memo(SupplierStoreProductTab);
