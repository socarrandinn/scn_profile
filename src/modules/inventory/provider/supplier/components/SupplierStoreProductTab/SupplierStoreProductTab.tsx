import DynamicTabs from 'modules/common/components/DynamicTabs/DynamicTabs';
import { memo, useMemo } from 'react';
import { useStoresTabs } from '../../hooks/useStoresTabs';
import SupplierInventoryTabPanel from '../SupplierInventoryListSummary/SupplierInventoryTabPanel';
import { useTranslation } from 'react-i18next';
import SupplierStoreProductTabSkeleton from './SupplierStoreProductTabSkeleton';
import { useFindSupplierStoreDistributionSummary } from '../../hooks/useFindSupplierStoreDistributionSummary';

const SupplierStoreProductTab = () => {
  const { t } = useTranslation('common');
  const { getTabs } = useStoresTabs();
  const { data, isLoading } = useFindSupplierStoreDistributionSummary();
  const tabs: any[] = useMemo(() => getTabs(data) || [], [data?.data]);

  if (isLoading) return <SupplierStoreProductTabSkeleton />;

  return <DynamicTabs tabs={tabs} title={t('stores')} component={SupplierInventoryTabPanel} />;
};

export default memo(SupplierStoreProductTab);
