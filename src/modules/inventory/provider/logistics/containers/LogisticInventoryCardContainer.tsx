import { memo, useMemo } from 'react';
import { Grid, Stack } from '@mui/material';
import { ConditionContainer } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { IStoreDistribution } from 'modules/inventory/common/interfaces/IProductAnalytic';
import { SummaryStoreBox } from 'modules/inventory/common/components/SummaryStoreBox';
import { RadialBarChart } from 'modules/inventory/common/components/SummaryStoreBox/RadialBarChart';
import { useTranslation } from 'react-i18next';
import { useFindLogisticStoreDistributionSummary } from '../hooks/useFindLogisticStoreDistributionSummary';
import { isEmpty } from 'lodash';

export const LogisticInventoryCardContainer = () => {
  const { hasPermission } = useSecurity();
  return (
    <ConditionContainer active={hasPermission('REPORT_VIEW')} alternative={<></>}>
      <LogisticInventoryCardList />
    </ConditionContainer>
  );
};

const LogisticInventoryCardList = () => {
  const { data: distributions, isLoading } = useFindLogisticStoreDistributionSummary();

  if(isEmpty(distributions)) return <></>

  return (
    <Stack>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        {distributions?.map((item: IStoreDistribution) => (
          <Grid key={item?.store} item xs={12} md={6} lg={4}>
            <StoreItem store={item} isLoading={isLoading} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default memo(LogisticInventoryCardList);

type Props = {
  store: IStoreDistribution;
  isLoading: boolean;
};
export const StoreItem = ({ store, isLoading }: Props) => {
  const { t } = useTranslation('store');
  const series = useMemo(
    () => [
      {
        serie: store?.visibles,
        label: t('distribution.visibles'),
        of: store?.of,
      },
      {
        serie: store?.hasStock,
        label: t('distribution.hasStock'),
        of: store?.of,
      },
      {
        serie: store?.notStock,
        label: t('distribution.notStock'),
        of: store?.of,
      },
    ],
    [store],
  );
  const total = useMemo(() => `${store.total} (${store.coverage}%)`, [store]);
  return (
    <SummaryStoreBox
      isLoading={isLoading}
      list={{
        series: series,
        title: t('distribution.productStore'),
      }}
      summary={{
        title: store?.storeName || store?.store,
        subtitle: 'Cantidad de productos',
      }}
    >
      <RadialBarChart values={series} total={total} />
    </SummaryStoreBox>
  );
};
