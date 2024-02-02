import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { Box } from '@mui/material';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useStoreDetail } from '../../context/StoreContext';
import { storeTabs } from '../../constants/store.tabs';
import { StoreDeleteButton, StoreEditButton } from '../StoreDetailActions';

const ProductHeaderDetails = () => {
  const { isLoading, error, store } = useStoreDetail();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={store?.name || ''}
      subtitle={store?.description || ''}
      // @ts-ignore
      logo={store?.image}
      actions={<Actions />}
    >
      <RouterTab
        tabs={storeTabs}
        prefix={`/inventory/stores/${store?._id as string}`}
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
