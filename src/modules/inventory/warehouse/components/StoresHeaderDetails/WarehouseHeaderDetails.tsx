import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useWarehouseDetail } from '../../context/WarehouseContext';
import { warehouseTabs } from '../../constants/warehouse.tabs';
import { WAREHOUSE_STYLE } from '../../constants/entities.style';
import { Link } from 'react-router-dom';
import WarehouseHeaderActions from './WarehouseHeaderActions';

const WarehouseHeaderDetails = () => {
  const { isLoading, error, warehouse } = useWarehouseDetail();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton hideImage />;

  return (
    <HeaderSummaryTabs
      title={warehouse?.name || ''}
      subtitle={
        warehouse?.logistic?._id
          ? <Link to={`/inventory/settings/logistics/${warehouse.logistic._id as string}/general`}>
            {warehouse?.logistic?.name || ''}
          </Link> : warehouse?.logistic?.name || ''
      }
      hideImage
      actions={<WarehouseHeaderActions id={warehouse?._id as string} visible={warehouse?.visible} />}
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

export default memo(WarehouseHeaderDetails);
