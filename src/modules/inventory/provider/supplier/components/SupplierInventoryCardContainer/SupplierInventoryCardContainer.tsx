import { memo, useMemo } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { ConditionContainer } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { useFindSupplierStoreDistributionSummary } from '../../hooks/useFindSupplierStoreDistributionSummary';
import { IStoreDistribution } from 'modules/inventory/common/interfaces/IProductAnalytic';
import { SummaryStoreBox } from 'modules/inventory/common/components/SummaryStoreBox';
import { RadialBarChart } from 'modules/inventory/common/components/SummaryStoreBox/RadialBarChart';
import { Trans, useTranslation } from 'react-i18next';
import { isEmpty } from 'lodash';
import { radiarColors } from '../../constants/supplier.apexcarts';

const components ={
  bold: <Typography fontWeight={800}  component={'span'} />
}

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
        {distributions?.map((item: IStoreDistribution) => (
          <Grid key={item?.store} item xs={12} md={6} lg={4}>
            <StoreItem store={item} isLoading={isLoading} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default memo(SupplierInventoryCardList);

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
        of: store?.total,
      },
      {
        serie: store?.hasStock,
        label: t('distribution.hasStock'),
        of: store?.total,
      },
      {
        serie: store?.notStock,
        label: t('distribution.notStock'),
        of: store?.total,
      },
    ],
    [store],
  );
  const total = useMemo(() => `(${store.coverage}%)`, [store]);
  return (
    <SummaryStoreBox
      isLoading={isLoading}
      list={{
        series: series,
        title: t('distribution.productStore'),
      }}
      summary={{
        title: store?.storeName || store?.store,
        subtitle: (
          <Trans i18nKey={'store:distribution:productQuantity'} components={components} values={{ total: store?.total, of: store?.of }} />
        ),
      }}
      colors={radiarColors}
    >
      <RadialBarChart values={series} total={total} colors={radiarColors} />
    </SummaryStoreBox>
  );
};
