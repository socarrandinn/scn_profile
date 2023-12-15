import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { Button } from '@mui/material';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { FlexBox } from '@dfl/mui-react-common';
import { useStoreDetail } from '../../context/StoreContext';
import { storeTabs } from '../../constants/store.tabs';

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
    <FlexBox gap={1} mt={1} mb={2}>
      <Button variant={'outlined'} size={'small'} disabled>
        ACTION 1
      </Button>
      <Button variant={'outlined'} size={'small'} disabled>
        ACTION 2
      </Button>
    </FlexBox>
  );
};
