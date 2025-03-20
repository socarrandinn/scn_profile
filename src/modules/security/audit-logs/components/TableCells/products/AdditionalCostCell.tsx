import { CurrencyValue } from '@dfl/mui-react-common';
import { Box, Chip, Divider, Stack, Typography } from '@mui/material';
import { PercentValue } from 'components/libs/PercentValue';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { OWNERSHIP_TYPES_MAP } from 'modules/inventory/product/constants/product-other-cost.enum';
import { IOtherCost, PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';
import { useTranslation } from 'react-i18next';

type AdditionalCostCellProps = {
  otherCost: IOtherCost[];
};

const AdditionalCostCell = ({ otherCost = [] }: AdditionalCostCellProps) => {
  const { t } = useTranslation('product');
  return (
    <Stack divider={<Divider flexItem />} gap={1}>
      {otherCost?.map((cost) => (
        <Stack
          key={cost?.ownership}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          gap={1}
        >
          <Box>
            <AvatarNameCell
              link={`/inventory/settings/${OWNERSHIP_TYPES_MAP[cost?.ownershipType]}/${cost?.ownership}/general`}
              hideImage
              name={cost?.ownershipName}
              permissions={[LOGISTICS_PERMISSIONS.LOGISTICS_VIEW]}
            />
            <Typography>{t(`provider:${cost?.ownershipType}`)}</Typography>
          </Box>
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

export default AdditionalCostCell;
