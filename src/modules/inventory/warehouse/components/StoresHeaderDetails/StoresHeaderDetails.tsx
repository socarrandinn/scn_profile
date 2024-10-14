import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { Box } from '@mui/material';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useWarehouseDetail } from '../../context/WarehouseContext';
import { warehouseTabs } from '../../constants/warehouse.tabs';
import { StoreDeleteButton, StoreEditButton } from '../StoreDetailActions';
import { WAREHOUSE_STYLE } from '../../constants/entities.style';
import { Link } from 'react-router-dom';

const ProductHeaderDetails = () => {
  const { isLoading, error, warehouse } = useWarehouseDetail();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={warehouse?.name || ''}
      subtitle={
        warehouse?.logistic?._id
          ? <Link to={`/inventory/settings/logistics/${warehouse.logistic._id as string}/general`}>
        {warehouse?.logistic?.name || ''}
      </Link> : warehouse?.logistic?.name || ''
      }
      // @ts-ignore
      logo={warehouse?.image}
      actions={<Actions />}
      entityStyle={WAREHOUSE_STYLE}
    >
      <RouterTab
        tabs={warehouseTabs}
        prefix={`/inventory/warehouses/${warehouse?._id as string}`}
        translationNs={'warehouse'}
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
