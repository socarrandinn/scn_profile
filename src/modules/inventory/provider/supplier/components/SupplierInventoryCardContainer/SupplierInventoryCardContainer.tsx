import { memo } from 'react';
import SupplierInventoryCard from './SupplierInventoryCard';
import { Stack } from '@mui/material';
import { ConditionContainer } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { useFindSupplierStoreDistributionSummary } from '../../hooks/useFindSupplierStoreDistributionSummary';
import { IStoreDistribution } from 'modules/inventory/common/interfaces/IProductAnalytic';

export const SupplierInventoryCardContainer = () => {
  const { hasPermission } = useSecurity();
  return (
    <ConditionContainer active={hasPermission('REPORT_VIEW')} alternative={<></>}>
      <SupplierInventoryCardList />
    </ConditionContainer>
  );
};

const SupplierInventoryCardList = () => {
  const { data: distributions, isLoading } = useFindSupplierStoreDistributionSummary();

  return (
    <Stack gap={{ xs: 1, md: 2 }}>
      {distributions?.map((distribution: IStoreDistribution) => (
        <SupplierInventoryCard key={distribution.store} distribution={distribution} isLoading={isLoading} />
      ))}
    </Stack>
  );
};
export default memo(SupplierInventoryCardList);
