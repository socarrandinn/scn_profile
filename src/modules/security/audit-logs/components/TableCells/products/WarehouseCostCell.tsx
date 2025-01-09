import { CurrencyValue } from '@dfl/mui-react-common';
import { Chip, Divider, Stack } from '@mui/material';
import { PercentValue } from 'components/libs/PercentValue';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { PriceType, WarehouseCostConfigDto } from 'modules/inventory/product/interfaces/IProductPriceDetails';

type WarehouseCostCellProps = {
  otherCost: WarehouseCostConfigDto[];
};

const WarehouseCostCell = ({ otherCost = [] }: WarehouseCostCellProps) => {
  return (
    <Stack divider={<Divider flexItem />} gap={1}>
      {otherCost?.map((cost) => (
        <Stack
          key={cost?.warehouse}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          gap={1}
        >
          <AvatarNameCell
            link={`/inventory/warehouses/${cost?.warehouse}/general`}
            hideImage
            name={cost?.warehouseName}
          />
          <Chip
            label={
              cost?.type === PriceType.PERCENT ? (
                <PercentValue value={cost?.value} />
              ) : (
                <CurrencyValue value={cost?.value} currency='$' />
              )
            }
          />
        </Stack>
      ))}
    </Stack>
  );
};

export default WarehouseCostCell;
