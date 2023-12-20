import { memo } from 'react';
import { IStore } from 'modules/inventory/store/interfaces';
import SupplierInventoryCard from './SupplierInventoryCard';
import { Stack } from '@mui/material';
import { ConditionContainer } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';

type SupplierInventoryCardListProps = {
  stores: IStore[];
};

const SupplierInventoryCardList = ({ stores }: SupplierInventoryCardListProps) => {
  const { hasPermission } = useSecurity();
  return (
    <ConditionContainer active={hasPermission('REPORT_VIEW')} alternative={<></>}>
      <Stack gap={{ xs: 1, md: 2 }}>
        {stores?.map((store) => (
          <SupplierInventoryCard key={store?._id} store={store} />
        ))}
      </Stack>
    </ConditionContainer>
  );
};
export default memo(SupplierInventoryCardList);
