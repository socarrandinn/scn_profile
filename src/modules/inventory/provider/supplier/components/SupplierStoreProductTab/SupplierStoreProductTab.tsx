import DynamicTabs from 'modules/common/components/DynamicTabs/DynamicTabs';
import { memo, useMemo } from 'react';
import { useStoresTabs } from '../../hooks/useStoresTabs';
import { SupplierInventoryTabPanel } from '../SupplierInventoryTabPanel';
import { useTranslation } from 'react-i18next';
import SupplierStoreProductTabSkeleton from './SupplierStoreProductTabSkeleton';
import { useFindSupplierStoreDistributionSummary } from '../../hooks/useFindSupplierStoreDistributionSummary';
import { isEmpty } from 'lodash';
import WarehouseNotExit from 'modules/inventory/provider/common/components/WarehouseNotExit';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';

const SupplierStoreProductTab = () => {
  const { t } = useTranslation('common');
  const { providerProductsId } = useProviderProductsDetail();
  const { data, isLoading } = useFindSupplierStoreDistributionSummary(providerProductsId);
  const { getTabs } = useStoresTabs();
  const tabs: any[] = useMemo(() => getTabs(data) || [], [data, getTabs]);

  if (isLoading) return <SupplierStoreProductTabSkeleton />;

  if (isEmpty(tabs)) return <WarehouseNotExit />;

  return <DynamicTabs tabs={tabs} title={t('warehouses')} component={SupplierInventoryTabPanel} />;
};

export default memo(SupplierStoreProductTab);
