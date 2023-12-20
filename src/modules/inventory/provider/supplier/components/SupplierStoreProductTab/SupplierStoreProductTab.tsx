import DynamicTabs from 'modules/common/components/DynamicTabs/DynamicTabs';
import { IStore } from 'modules/inventory/store/interfaces';
import { memo, useMemo } from 'react';
import { useStoresTabs } from '../../hooks/useStoresTabs';
import SupplierInventoryTabPanner from '../SupplierInventoryListSummary/SupplierInventoryTabPanner';
import { useTranslation } from 'react-i18next';
import SupplierStoreProductTabSkeleton from './SupplierStoreProductTabSkeleton';

type Props = {
  stores: IStore[];
  isLoading: boolean;
};
const SupplierStoreProductTab = ({ stores, isLoading }: Props) => {
  const { t } = useTranslation('common');
  const { getTabs } = useStoresTabs();
  const tabs: any[] = useMemo(() => getTabs(stores) || [], []);

  if (isLoading) return <SupplierStoreProductTabSkeleton />;

  return <DynamicTabs tabs={tabs} title={t('stores')} component={SupplierInventoryTabPanner} />;
};

export default memo(SupplierStoreProductTab);
