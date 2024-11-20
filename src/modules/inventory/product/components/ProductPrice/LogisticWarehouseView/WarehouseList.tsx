import { CurrencyValue, LongText } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { Divider, Stack, styled } from '@mui/material';
import { PercentValue } from 'components/libs/PercentValue';
import {
  IProductPriceDetails,
  PriceType,
  WarehouseCostConfigDto,
} from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { memo, useMemo } from 'react';

import TooltipError from './TooltipError';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { usePriceCommission } from 'modules/inventory/product/hooks/usePriceCommission';
type WarehouseListProps = {
  warehouses: WarehouseCostConfigDto[];
  price?: IProductPriceDetails;
};

const Content = styled(Stack)<{ bg: 'error' | 'primary' }>(({ theme, bg }) => ({
  height: 50,
  position: 'relative',
  padding: '8px 16px',
  gap: 8,
  flexDirection: 'row',
  alignItems: 'center',

  ':before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 8,
    height: '100%',
    borderRadius: 5,
    backgroundColor: theme.palette[bg].main,
  },
}));

const WarehouseList = ({ warehouses, price }: WarehouseListProps) => {
  return (
    <Stack
      flex={1}
      divider={<Divider flexItem orientation='horizontal' />}
      sx={{
        maxHeight: 300,
        overflow: 'auto',
      }}
    >
      {warehouses?.map((warehouse: WarehouseCostConfigDto) => (
        <WarehouseItem key={warehouse?.warehouse} warehouse={warehouse} price={price} />
      ))}
    </Stack>
  );
};

export default memo(WarehouseList);

const WarehouseItem = ({ warehouse, price }: { warehouse: WarehouseCostConfigDto; price?: IProductPriceDetails }) => {
  const { product } = useProductDetail();
  const { checkGlobalPercent } = usePriceCommission();

  const { commissionLogistic, valueLogistic } = useMemo(() => {
    const _price = price || product?.priceDetails;
    const commissionLogistic = _price?.distribution?.logistic?.value || 0;
    const valueLogistic = _price?.values?.logistic || 0;
    return {
      commissionLogistic,
      valueLogistic,
    };
  }, [price, product?.priceDetails]);

  const _color = useMemo(
    () =>
      checkGlobalPercent({
        commissionLogistic,
        valueLogistic,
        warehouse,
      })
        ? 'error'
        : 'primary',
    [checkGlobalPercent, commissionLogistic, valueLogistic, warehouse],
  );

  const sxProps = {
    color: `${_color}.main`,
    fontWeight: 600,
  };
  return (
    <Content bg={_color} divider={<Divider flexItem orientation='vertical' />}>
      <ReactLink to={`/inventory/warehouses/${warehouse?.warehouse}/general`} underline='hover' color={'text.primary'}>
        <LongText lineClamp={1} text={warehouse?.warehouseName} />
      </ReactLink>
      <Stack gap={1} flexDirection={'row'}>
        {warehouse?.type === PriceType.PERCENT ? (
          <PercentValue value={warehouse?.value} {...sxProps} />
        ) : (
          <CurrencyValue value={warehouse?.value} currency='$' {...sxProps} />
        )}
        {_color === 'error' && <TooltipError />}
      </Stack>
    </Content>
  );
};
