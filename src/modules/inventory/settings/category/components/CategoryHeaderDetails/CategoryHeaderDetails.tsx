import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { Box, Button } from '@mui/material';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useCategoryDetail } from '../../context/CategoryDetailContext';
import { categoriesTabs } from '../../constants/tabs.details';

const CategoryHeaderDetails = () => {
  const { isLoading, error, category, categoryId } = useCategoryDetail();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={category?.name || ''}
      subtitle={category?.description || ''}
      logo={category?.image?.url}
      actions={<Actions />}
    >
      <RouterTab
        tabs={categoriesTabs}
        prefix={`/inventory/settings/categories/${categoryId as string}`}
        translationNs={'provider'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(CategoryHeaderDetails);

export const Actions = () => {
  return (
    <Box gap={1} display={'flex'}>
      <Button variant='outlined'>Action 1</Button>
      <Button variant='outlined'>Action 2</Button>
      <Button variant='outlined'>Action 3</Button>
    </Box>
  );
};
