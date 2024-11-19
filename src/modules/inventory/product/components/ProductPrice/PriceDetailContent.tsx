import { ChildrenProps, CurrencyValue } from '@dfl/mui-react-common';
import { MonetizationOnOutlined } from '@mui/icons-material';
import { memo, ReactNode, useMemo } from 'react';
import { Chip, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IProduct } from '../../interfaces/IProduct';
import { IPriceConfig } from 'modules/inventory/warehouse/interfaces/IWarehouseSupplier';
import { PriceType } from '../../interfaces/IProductPriceDetails';
import { PercentValue } from 'components/libs/PercentValue';
import { LogisticIcon } from 'modules/inventory/common/components/Icons/LogisticIcon';
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
      <Stack flex={1} gap={2}>
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
          md: 370,
        },
        height: 140,
        width: '100%',
        borderRadius: '10px',
        backgroundColor: (theme) => theme.palette.grey[100],
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack sx={{ fontSize: 40, fontWeight: 600, flexDirection: 'row', alignItems: 'center', gap: 1 }}>
        <MonetizationOnOutlined sx={{ fontSize: 40 }} />
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
        minWidth: 100,
        backgroundColor: theme.palette.grey[100],
      })}
      size='small'
      label={value}
    />
  );
};

export const CommissionPrice = ({ type, value }: IPriceConfig) => {
  switch (type) {
    case PriceType.PERCENT:
      return <CommissionChipItem value={<PercentValue value={value} />} />;
    case PriceType.FIXED:
      return <CommissionChipItem value={<CurrencyValue value={value} currency='$' />} />;
  }
};

const LogisticItem = ({ value, name }: { value: ReactNode; name: string }) => {
  return (
    <CommissionChipItem
      value={
        <Stack gap={1} flexDirection={'row'}>
          <LogisticIcon fontSize='small' />
          <Typography>{name}</Typography>
          {value}
        </Stack>
      }
    />
  );
};

export const CommissionLogisticPrice = ({ type, value, name }: IPriceConfig & { name: string }) => {
  switch (type) {
    case PriceType.PERCENT:
      return <LogisticItem name={name} value={<PercentValue value={value} />} />;
    case PriceType.FIXED:
      return <LogisticItem name={name} value={<CurrencyValue value={value} currency='$' />} />;
  }
};
