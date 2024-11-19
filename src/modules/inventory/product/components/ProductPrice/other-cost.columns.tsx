import { HeadCell } from '@dfl/mui-admin-layout';
import { IOtherCost } from '../../interfaces/IProductPriceDetails';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { Typography } from '@mui/material';
import { t } from 'i18next';
import { OWNERSHIP_TYPES_MAP } from '../../constants/product-other-cost.enum';
import { CommissionPrice } from './PriceDetailContent';

export const ownershipColumn: HeadCell = {
  field: 'ownership',
  headerName: 'product:otherCost.ownership',
  renderCell: (name, data: IOtherCost) => (
    <AvatarNameCell
      link={`/inventory/settings/${OWNERSHIP_TYPES_MAP[data?.ownershipType]}/${data?.ownership}/general`}
      hideImage
      name={data?.ownershipName}
    />
  ),
};

export const ownershipTypeColumn: HeadCell = {
  field: 'ownershipType',
  headerName: 'product:otherCost.ownershipType',
  renderCell: (name, otherCost: IOtherCost) => <Typography>{t(`provider:${otherCost?.ownershipType}`)}</Typography>,
};

export const costColumn: HeadCell = {
  field: 'value',
  headerName: 'product:otherCost.cost',
  renderCell: (value, data) => <CommissionPrice type={data?.type} value={value} />,
};

export const otherCostColumns: Array<HeadCell<any>> = [ownershipColumn, ownershipTypeColumn, costColumn];
