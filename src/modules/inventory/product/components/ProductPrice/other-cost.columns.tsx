import { HeadCell } from '@dfl/mui-admin-layout';
import { IOtherCost, PriceType } from '../../interfaces/IProductPriceDetails';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { Typography } from '@mui/material';
import { t } from 'i18next';
import { OWNERSHIP_TYPES_MAP } from '../../constants/product-other-cost.enum';
import { PercentValue } from 'components/libs/PercentValue';
import { CurrencyValue } from '@dfl/mui-react-common';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';

export const ownershipColumn: HeadCell = {
  field: 'ownership',
  headerName: 'product:otherCost.ownership',
  renderCell: (name, data: IOtherCost) => (
    <AvatarNameCell
      link={`/inventory/settings/${OWNERSHIP_TYPES_MAP[data?.ownershipType]}/${data?.ownership}/general`}
      hideImage
      name={data?.ownershipName}
      permissions={[LOGISTICS_PERMISSIONS.LOGISTICS_VIEW]}
      key={data?.type}
    />
  ),
};

export const ownershipTypeColumn: HeadCell = {
  field: 'ownershipType',
  headerName: 'product:otherCost.ownershipType',
  renderCell: (name, otherCost: IOtherCost) => <Typography key={otherCost?.ownership}>{t(`provider:${otherCost?.ownershipType}`)}</Typography>,
};

export const costColumn: HeadCell = {
  field: 'value',
  headerName: 'product:otherCost.cost',
  renderCell: (value, data) =>
    data?.type === PriceType.PERCENT ? <PercentValue value={value} key={value} /> : <CurrencyValue value={value} currency='$' key={value} />,
};

export const otherCostColumns: Array<HeadCell<any>> = [ownershipColumn, ownershipTypeColumn, costColumn];
