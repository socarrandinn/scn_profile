import { HeadCell } from '@dfl/mui-admin-layout';
import { IOtherCost, PriceType } from '../../interfaces/IProductPriceDetails';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { Typography } from '@mui/material';
import { t } from 'i18next';
import { OWNERSHIP_TYPES_MAP } from '../../constants/product-other-cost.enum';

export const ownershipColumn: HeadCell = {
  field: 'ownership',
  headerName: 'common:provider.title',
  renderCell: (name, data: IOtherCost) => (
    <AvatarNameCell link={`/inventory/settings/${OWNERSHIP_TYPES_MAP[data?.ownershipType]}/${data?.ownership}/general`} hideImage name={data?.ownershipName} />
  ),
};

export const ownershipTypeColumn: HeadCell = {
  field: 'ownershipType',
  headerName: 'common:provider.type',
  renderCell: (name, otherCost: IOtherCost) => (
    <Typography>
      {t(`provider:${otherCost?.ownershipType}`)}
    </Typography>
  ),
};

export const costColumn: HeadCell = {
  field: 'cost',
  headerName: 'common:cost',
  renderCell: (name, otherCost: IOtherCost) => (
    <Typography>
      {otherCost?.type === PriceType.FIXED && '$'}{otherCost?.value}{otherCost?.type === PriceType.PERCENT && '%'}
    </Typography>
  ),
};

export const otherCostColumns: Array<HeadCell<any>> = [
  ownershipColumn,
  ownershipTypeColumn,
  costColumn
];
