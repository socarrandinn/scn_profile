import { LogisticsRowActions } from 'modules/inventory/provider/logistics/components/LogisticsRowActions';
import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import { addressColumn, createdATColumn } from 'modules/common/constants/common.columns';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants/logistics.permissions';
import ProviderLogCell from 'modules/inventory/provider/logistics/components/ProviderLogCell/ProviderLogCell';
import { ProviderAvatarCell } from 'modules/inventory/provider/common/components/ProviderAvatarCell';
import { providerStatusColumn } from 'modules/inventory/provider/common/constants';
import { CurrencyValue } from '@dfl/mui-react-common';

export const logisticsImageColumn: HeadCell<ILogistics> = {
  field: 'avatar',
  headerName: 'provider:fields.image',
  disablePadding: false,
  align: CellAlign.CENTER,
  maxWidth: 80,
  sortable: false,

  renderCell: (_, data: ILogistics) => <ProviderAvatarCell name={data.name} variant='rounded' image={data.avatar} />,
};

export const logisticsNameColumn: HeadCell<ILogistics> = {
  field: 'name',
  headerName: 'logistics:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: ILogistics) => (
    <ProviderLogCell hideImage ProviderLogisticId={data?._id as string} name={name} avatar={data?.avatar} />
  ),
};
export const logisticsCodeColumn: HeadCell<ILogistics> = {
  field: 'code',
  headerName: 'logistics:fields.code',
};

export const logisticsEmailColumn: HeadCell<ILogistics> = {
  field: 'contacts',
  headerName: 'logistics:fields.email',
  type: CellType.EMAIL,
  renderCell: (contacts: any) => contacts?.mainEmail,
};
export const logisticHandlingCostColumn: HeadCell<ILogistics> = {
  field: 'handlingCost',
  align: CellAlign.CENTER,
  type: CellType.CURRENCY,
  headerName: 'logistics:fields.handlingCost',
  renderCell: (value: number) => <CurrencyValue value={Number(value || 0).toFixed(2)} />,
};
export const logisticsActionsColumn: HeadCell<ILogistics> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: LOGISTICS_PERMISSIONS.LOGISTICS_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: LogisticsRowActions,
};

export const logisticsColumns: Array<HeadCell<any>> = [
  logisticsImageColumn,
  logisticsNameColumn,
  // logisticsCodeColumn,
  addressColumn, // common column
  logisticHandlingCostColumn,
  logisticsEmailColumn,
  providerStatusColumn,
  createdATColumn,
  logisticsActionsColumn,
];
