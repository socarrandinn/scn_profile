import { memo } from 'react';
import { Stack } from '@mui/material';
import { SummaryBox } from 'components/libs/analytic/Chart/SummaryBox';
import { NumberValue } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { IStore } from 'modules/inventory/store/interfaces';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

type SupplierInventoryCardProps = {
  store: IStore;
};

const SupplierInventoryCard = ({ store }: SupplierInventoryCardProps) => {
  const { t } = useTranslation('provider');
  return (
    <Stack flexDirection={{ xs: 'column', md: 'row' }} gap={{ xs: 1, md: 2 }}>
      <SummaryBox
        title={store?.name}
        subtitle={t('reports.store.product.quantity')}
        total={500}
        Icon={StorefrontOutlinedIcon}
        isLoading={false}
        percent={<RenderPerCentCard values={60} />}
      />
      <SummaryBox
        title={t('reports.store.product.store')}
        flexGrow={1}
        total={300}
        percent={<RenderPerCentCard values={100} />}
        values={[
          {
            label: t('reports.store.product.withInventory'),
            value: 200,
          },
          {
            label: t('reports.store.product.withoutInventory'),
            value: 100,
          },
        ]}
        color='warning'
        isLoading={false}
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
