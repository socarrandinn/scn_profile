import { CurrencyValue } from '@dfl/mui-react-common';
import { Divider, Stack, styled, Typography } from '@mui/material';
import { PercentValue } from 'components/libs/PercentValue';
import { PriceType, WarehouseCostConfigDto } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { memo, useMemo } from 'react';
type WarehouseListProps = {
  warehouses: WarehouseCostConfigDto[];
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

const WarehouseList = ({ warehouses }: WarehouseListProps) => {
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
        <WarehouseItem key={warehouse?.warehouse} warehouse={warehouse} />
      ))}
    </Stack>
  );
};

export default memo(WarehouseList);

const WarehouseItem = ({ warehouse }: { warehouse: WarehouseCostConfigDto }) => {
  const _color = useMemo(() => (warehouse?.value < 0 ? 'error' : 'primary'), [warehouse]);
  const sxProps = {
    color: `${_color}.main`,
    fontWeight: 600,
  };
  return (
    <Content bg={_color} divider={<Divider flexItem orientation='vertical' />}>
      <Typography fontSize={14}>{warehouse?.warehouseName}</Typography>
      {warehouse?.type === PriceType.PERCENT ? (
        <PercentValue value={warehouse?.value} {...sxProps} />
      ) : (
        <CurrencyValue value={warehouse?.value} currency='$' {...sxProps} />
      )}
    </Content>
  );
};
