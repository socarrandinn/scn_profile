import DynamicTabs from 'modules/common/components/DynamicTabs/DynamicTabs';
import { memo, useMemo } from 'react';
import { useStoresTabs } from '../../hooks/useStoresTabs';
import { SupplierInventoryTabPanel } from '../SupplierInventoryListSummary';
import { useTranslation } from 'react-i18next';
import SupplierStoreProductTabSkeleton from './SupplierStoreProductTabSkeleton';
import { useFindSupplierStoreDistributionSummary } from '../../hooks/useFindSupplierStoreDistributionSummary';

const SupplierStoreProductTab = () => {
  const { t } = useTranslation('common');
  const { data, isLoading } = useFindSupplierStoreDistributionSummary();
  const { getTabs } = useStoresTabs();
  const tabs: any[] = useMemo(() => getTabs(data) || [], [data, getTabs]);

  if (isLoading) return <SupplierStoreProductTabSkeleton />;

  return <DynamicTabs tabs={tabs} title={t('warehouses')} component={SupplierInventoryTabPanel} actions={undefined} />;
};

export default memo(SupplierStoreProductTab);

/* const SupplierStoreToolbar = ({ selectedTab: warehouseId }: { selectedTab: string }) => {
  const { t } = useTranslation('common');
  const { isOpen, onClose, onOpen } = useToggle();
  return (
    <>
      <AddButton action={onOpen}>{t('add')} </AddButton>
      <StoreProductAddStockModal
        open={isOpen}
        onClose={onClose}
        warehouse={warehouseId}
        initValue={{
          items: [],
          warehouse: warehouseId,
          note: '',
          file: '',
          cause: CAUSE_TYPE.ATTENTION_WORKERS,
        }}
      />
    </>
  );
}; */
