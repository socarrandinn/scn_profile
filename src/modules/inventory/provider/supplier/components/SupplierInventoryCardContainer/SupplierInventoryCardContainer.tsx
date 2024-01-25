import { memo } from 'react';
import SupplierInventoryCard from './SupplierInventoryCard';
import { Grid, Stack } from '@mui/material';
import { ConditionContainer } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { useFindSupplierStoreDistributionSummary } from '../../hooks/useFindSupplierStoreDistributionSummary';
import { IStoreDistribution } from 'modules/inventory/common/interfaces/IProductAnalytic';
import { SummaryStoreBox } from 'modules/inventory/common/components/SummaryStoreBox';

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
    <Grid container spacing={{ xs: 1, md: 2 }}>
      {Array(8)
        .fill('')
        .map((item) => (
          <Grid key={item} item xs={12} md={4}>
            <SummaryStoreBox
              colors={['red', 'blue', 'grey']}
              isLoading={false}
              list={{
                list: [5, 55, 40],
                title: 'Productos en Almacén',
              }}
              summary={{
                title: 'Nuevo Store Nuevo Store Nuevo Store',
                subtitle: 'Cantidad de productos',
              }}
            />
          </Grid>
        ))}
    </Grid>
  );
  /* return (
    <Stack flexDirection={'row'} flexWrap={'wrap'} gap={{ xs: 1, md: 2 }}>
      <SummaryStoreBox
        colors={['red', 'blue', 'grey']}
        isLoading={false}
        list={{
          list: [20, 74, 35],
          title: 'Productos en Almacén',
        }}
        summary={{
          title: 'Nuevo Store',
          subtitle: 'Cantidad de productos',
        }}
      />
      {distributions?.map((distribution: IStoreDistribution) => (
        <SupplierInventoryCard key={distribution.store} distribution={distribution} isLoading={isLoading} />
      ))}
    </Stack>
  ); */
};
export default memo(SupplierInventoryCardList);
