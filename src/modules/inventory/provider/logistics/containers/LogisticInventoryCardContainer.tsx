import { memo, useMemo } from 'react';
import { Grid } from '@mui/material';
import { ConditionContainer } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { IWarehouseDistribution } from 'modules/inventory/common/interfaces/IProductAnalytic';
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

  if (isEmpty(distributions)) return <></>;

  return (
    <Grid container spacing={{ xs: 1, md: 2 }}>
      {distributions?.map((item: IWarehouseDistribution) => (
        <Grid key={item?.warehouse} item xs={12} md={6} lg={4}>
          <StoreItem warehouse={item} isLoading={isLoading} />
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(LogisticInventoryCardList);

type Props = {
  warehouse: IWarehouseDistribution;
  isLoading: boolean;
};
export const StoreItem = ({ warehouse, isLoading }: Props) => {
  const { t } = useTranslation('warehouse');
  const series = useMemo(
    () => [
      {
        serie: warehouse?.visibles,
        label: t('distribution.visibles'),
        of: warehouse?.of,
      },
      {
        serie: warehouse?.hasStock,
        label: t('distribution.hasStock'),
        of: warehouse?.of,
      },
      {
        serie: warehouse?.notStock,
        label: t('distribution.notStock'),
        of: warehouse?.of,
      },
    ],
    [warehouse?.hasStock, warehouse?.notStock, warehouse?.of, warehouse?.visibles, t],
  );
  const total = useMemo(() => `${warehouse.total} (${warehouse.coverage}%)`, [warehouse]);
  return (
    <SummaryStoreBox
      isLoading={isLoading}
      list={{
        series,
        title: t('distribution.productStore'),
      }}
      summary={{
        title: warehouse?.warehouseName || warehouse?.warehouse,
        subtitle: 'Cantidad de productos',
      }}
    >
      <RadialBarChart values={series} total={total} />
    </SummaryStoreBox>
  );
};
