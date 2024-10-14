import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { Box } from '@mui/material';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useStoreDetail } from '../../context/StoreContext';
import { warehouseTabs } from '../../constants/warehouse.tabs';
import { StoreDeleteButton, StoreEditButton } from '../StoreDetailActions';
import { WAREHOUSE_STYLE } from '../../constants/entities.style';
import { Link } from 'react-router-dom';

const ProductHeaderDetails = () => {
  const { isLoading, error, store } = useStoreDetail();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={store?.name || ''}
      subtitle={
        store?.logistic?._id
          ? <Link to={`/inventory/settings/logistics/${store.logistic._id as string}/general`}>
        {store?.logistic?.name || ''}
      </Link> : store?.logistic?.name || ''
      }
      // @ts-ignore
      logo={store?.image}
      actions={<Actions />}
      entityStyle={WAREHOUSE_STYLE}
    >
      <RouterTab
        tabs={warehouseTabs}
        prefix={`/inventory/warehouses/${store?._id as string}`}
        translationNs={'store'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(ProductHeaderDetails);

export const Actions = () => {
  return (
    <Box gap={1} display={'flex'}>
      <StoreEditButton />
      <StoreDeleteButton />
    </Box>
  );
};
