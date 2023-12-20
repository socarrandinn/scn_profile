import { memo } from 'react';
import { IStore } from 'modules/inventory/store/interfaces';
import SupplierInventoryCard from './SupplierInventoryCard';
import { Stack } from '@mui/material';
import { ConditionContainer } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { useFindAnalyticStoreDistributions } from 'modules/inventory/common/hooks/useFindAnalyticStoreDistributions';

type SupplierInventoryCardListProps = {
  stores: IStore[];
};

export const SupplierInventoryCardContainer = ({ stores }: SupplierInventoryCardListProps) => {
  const { hasPermission } = useSecurity();
  return (
    <ConditionContainer active={hasPermission('REPORT_VIEW')} alternative={<></>}>
      <SupplierInventoryCardList stores={stores} />
    </ConditionContainer>
  );
};

const SupplierInventoryCardList = ({ stores }: SupplierInventoryCardListProps) => {
  const { data: distributions, isLoading } = useFindAnalyticStoreDistributions();
  return (
    <Stack gap={{ xs: 1, md: 2 }}>
      {stores?.map((store) => (
        <SupplierInventoryCard key={store?._id} store={store} distributions={distributions} isLoading={isLoading} />
      ))}
    </Stack>
  );
};
export default memo(SupplierInventoryCardList);
