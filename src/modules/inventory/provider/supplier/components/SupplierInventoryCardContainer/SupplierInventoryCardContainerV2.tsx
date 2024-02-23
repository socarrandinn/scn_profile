import { memo } from 'react';
import { Stack } from '@mui/material';
import { ConditionContainer } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { useFindSupplierStoreDistributionSummary } from '../../hooks/useFindSupplierStoreDistributionSummary';
import StoreProductTotal from 'modules/inventory/common/components/StoreBoxs/StoreProductTotal';
import { StoreCardItem } from 'modules/inventory/common/components/StoreBoxs';
import { IStoreDistribution } from 'modules/inventory/common/interfaces/IProductAnalytic';
import StoreSkeleton from 'modules/inventory/common/components/StoreBoxs/StoreSkeleton';

export const SupplierInventoryStoreContainer = () => {
  const { hasPermission } = useSecurity();
  return (
    <ConditionContainer active={hasPermission('REPORT_VIEW')} alternative={<></>}>
      <SupplierInventoryStoreList />
    </ConditionContainer>
  );
};

const SupplierInventoryStoreList = () => {
  const { data: distributions, isLoading } = useFindSupplierStoreDistributionSummary();

  if (isLoading) return <StoreSkeleton />;

  return (
    <Stack gap={{ xs: 1, md: 2 }} flexDirection={'row'} flexWrap={'wrap'}>
      <StoreProductTotal distributions={distributions} />
      {distributions?.map((store: IStoreDistribution) => (
        <StoreCardItem key={store?.store} store={store} />
      ))}
    </Stack>
  );
};

export default memo(SupplierInventoryStoreList);
