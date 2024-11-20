import { ChildrenProps, CurrencyValue } from '@dfl/mui-react-common';
import { MonetizationOnOutlined } from '@mui/icons-material';
import { memo, ReactNode, useMemo } from 'react';
import { Chip, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IProduct } from '../../interfaces/IProduct';
import { IProductPriceDetails, IValuesPrice } from '../../interfaces/IProductPriceDetails';
import { PercentValue } from 'components/libs/PercentValue';
import LogisticWarehouseView from './LogisticWarehouseView/LogisticWarehouseView';
import { warehouseCostConfigData } from './LogisticWarehouseView/mock';
type PriceDetailContentProps = {
  product: IProduct | undefined;
};

const PriceDetailContent = ({ product, children }: PriceDetailContentProps & ChildrenProps) => {
  const _finalPrice = useMemo(
    () => product?.finalPrice || product?.priceDetails?.values?.total || 0,
    [product?.finalPrice, product?.priceDetails?.values?.total],
  );
  return (
    <Stack gap={2} flexDirection={{ md: 'row' }}>
      <FinalPriceContent price={_finalPrice} />
      <Stack flex={1} gap={2} overflow={'hidden'}>
        {children}
      </Stack>
    </Stack>
  );
};

export default memo(PriceDetailContent);

const FinalPriceContent = ({ price }: { price: number }) => {
  const { t } = useTranslation('product');
  return (
    <Stack
      sx={{
        maxWidth: {
          xs: '100%',
          md: 220,
          lg: 370,
        },
        height: {
          xs: 120,
          lg: 140,
        },
        width: '100%',
        borderRadius: '10px',
        backgroundColor: (theme) => theme.palette.grey[100],
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack sx={{ fontSize: { xs: 30, lg: 40 }, fontWeight: 600, flexDirection: 'row', alignItems: 'center', gap: 1 }}>
        <MonetizationOnOutlined sx={{ fontSize: { xs: 30, lg: 40 } }} />
        {price}
      </Stack>
      <Typography>{t('finalPrice')}</Typography>
    </Stack>
  );
};

const CommissionChipItem = ({ value }: { value: ReactNode }) => {
  return (
    <Chip
      sx={(theme) => ({
        backgroundColor: theme.palette.grey[100],
      })}
      size='small'
      label={value}
    />
  );
};

type CommissionPriceProps = {
  price: IProductPriceDetails;
  item: keyof IValuesPrice;
};

export const CommissionPrice = ({ item, price }: CommissionPriceProps) => {
  const _value = (price?.values?.[item] as number) || 0;
  // @ts-ignore
  const _percent = (price?.distribution?.[item]?.value as number) || 0;
  return (
    <Stack gap={1} flexDirection={'row'} alignItems={'center'}>
      <PercentValue value={_percent} />
      <CommissionChipItem value={<CurrencyValue value={_value} currency='$' />} />
    </Stack>
  );
};

export const CommissionLogisticPrice = (props: CommissionPriceProps) => {
  return (
    <Stack gap={1} flexDirection={'row'} alignItems={'center'} flexWrap={'wrap'}>
      <CommissionPrice {...props} />
      <LogisticWarehouseView warehouses={warehouseCostConfigData || props?.price?.distribution?.warehouses} />
    </Stack>
  );
};
