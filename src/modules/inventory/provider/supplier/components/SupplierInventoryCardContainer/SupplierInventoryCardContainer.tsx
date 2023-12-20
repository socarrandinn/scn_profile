import { memo } from 'react';
import SupplierInventoryCard from './SupplierInventoryCard';
import { Stack } from '@mui/material';
import { ConditionContainer } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { useFindAnalyticStoreDistributions } from 'modules/inventory/common/hooks/useFindAnalyticStoreDistributions';
import { useAllStoresContext } from 'modules/inventory/store/context/StoresContext';
import { IStore } from 'modules/inventory/store/interfaces';

export const SupplierInventoryCardContainer = () => {
  const { hasPermission } = useSecurity();
  return (
    <ConditionContainer active={hasPermission('REPORT_VIEW')} alternative={<></>}>
      <SupplierInventoryCardList />
    </ConditionContainer>
  );
};

const SupplierInventoryCardList = () => {
  const { data: distributions, isLoading } = useFindAnalyticStoreDistributions();
  const { data } = useAllStoresContext();
  return (
    <Stack gap={{ xs: 1, md: 2 }}>
      {data?.data?.map((store: IStore) => (
        <SupplierInventoryCard key={store?._id} store={store} distributions={distributions} isLoading={isLoading} />
      ))}
    </Stack>
  );
};
export default memo(SupplierInventoryCardList);
