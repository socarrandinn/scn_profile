import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { SummaryBox } from 'components/libs/analytic/Chart/SummaryBox';
import { NumberValue } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { IStore } from 'modules/inventory/store/interfaces';
import { IStoreDistribution } from 'modules/inventory/common/interfaces/IProductAnalytic';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

type SupplierInventoryCardProps = {
  store: IStore;
  distributions: IStoreDistribution[];
  isLoading: boolean;
};

const SupplierInventoryCard = ({ store, distributions, isLoading }: SupplierInventoryCardProps) => {
  const { t } = useTranslation('provider');

  const distribution = useMemo(
    () => distributions?.find((distribution) => distribution?.store === store._id || undefined),
    [store, distributions],
  );

  return (
    <Stack flexDirection={{ xs: 'column', md: 'row' }} gap={{ xs: 1, md: 2 }}>
      <SummaryBox
        title={store?.name}
        subtitle={t('reports.store.product.quantity')}
        total={distribution?.of || 0}
        Icon={Inventory2OutlinedIcon}
        isLoading={isLoading}
        percent={<RenderPerCentCard values={distribution?.coverage || 0} />}
      />
      <SummaryBox
        title={t('reports.store.product.store')}
        flexGrow={1}
        total={distribution?.total || 0}
        values={[
          {
            label: t('reports.store.product.visibles'),
            value: distribution?.visibles || 0,
          },
          {
            label: t('reports.store.product.hasStock'),
            value: distribution?.hasStock || 0,
          },
          {
            label: t('reports.store.product.notStock'),
            value: distribution?.notStock || 0,
          },
        ]}
        color='primary'
        isLoading={isLoading}
      />
    </Stack>
  );
};

export default memo(SupplierInventoryCard);

type renderPerCentCardProps = {
  values: number;
};

export const RenderPerCentCard = ({ values }: renderPerCentCardProps) => {
  return (
    <>
      (<NumberValue value={values.toFixed(2)} />
      %)
    </>
  );
};
