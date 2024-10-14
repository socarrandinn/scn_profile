import { memo, useMemo } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { ConditionContainer } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { useFindSupplierStoreDistributionSummary } from '../../hooks/useFindSupplierStoreDistributionSummary';
import { IWarehouseDistribution } from 'modules/inventory/common/interfaces/IProductAnalytic';
import { SummaryStoreBox } from 'modules/inventory/common/components/SummaryStoreBox';
import { RadialBarChart } from 'modules/inventory/common/components/SummaryStoreBox/RadialBarChart';
import { Trans, useTranslation } from 'react-i18next';
import { isEmpty } from 'lodash';
import { radiarColors } from '../../constants/supplier.apexcarts';

const components = {
  bold: <Typography fontWeight={800} component={'span'} />,
};

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
  if (isEmpty(distributions)) return <></>;

  return (
    <Stack>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        {distributions?.map((item: IWarehouseDistribution) => (
          <Grid key={item?.warehouse} item xs={12} md={6} lg={4}>
            <StoreItem warehouse={item} isLoading={isLoading} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default memo(SupplierInventoryCardList);

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
        of: warehouse?.total,
      },
      {
        serie: warehouse?.hasStock,
        label: t('distribution.hasStock'),
        of: warehouse?.total,
      },
      {
        serie: warehouse?.notStock,
        label: t('distribution.notStock'),
        of: warehouse?.total,
      },
    ],
    [warehouse?.hasStock, warehouse?.notStock, warehouse?.total, warehouse?.visibles, t],
  );
  const total = useMemo(() => `(${warehouse.coverage}%)`, [warehouse]);
  return (
    <SummaryStoreBox
      isLoading={isLoading}
      list={{
        series,
        title: t('distribution.productWarehouse'),
      }}
      summary={{
        title: warehouse?.warehouseName || warehouse?.warehouse,
        subtitle: (
          <Trans
            i18nKey={'warehouse:distribution:productQuantity'}
            components={components}
            values={{ total: warehouse?.total, of: warehouse?.of }}
          />
        ),
      }}
      colors={radiarColors}
    >
      <RadialBarChart values={series} total={total} colors={radiarColors} />
    </SummaryStoreBox>
  );
};
