import { LogisticsRowActions } from 'modules/inventory/provider/logistics/components/LogisticsRowActions';
import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants/logistics.permissions';
import { IAddress } from 'modules/common/interfaces';
import ProviderLogCell from 'modules/inventory/provider/logistics/components/ProviderLogCell/ProviderLogCell';
import { AddressValue } from 'modules/common/components/Address';
import { ProviderAvatarCell } from 'modules/inventory/provider/common/components/ProviderAvatarCell';
import { providerStatusColumn } from 'modules/inventory/provider/common/constants';

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
export const logisticsAddressColumn: HeadCell<ILogistics> = {
  field: 'address',
  // translate: true,
  headerName: 'logistics:fields.address',
  renderCell: (value: IAddress) => <AddressValue value={value} />,
};

export const logisticHandlingCostColumn: HeadCell<ILogistics> = {
  field: 'handlingCost',
  align: CellAlign.CENTER,
  type: CellType.CURRENCY,
  headerName: 'logistics:fields.handlingcost',
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
  logisticsCodeColumn,
  logisticsAddressColumn,
  logisticHandlingCostColumn,
  logisticsEmailColumn,
  providerStatusColumn,
  createdATColumn,
  logisticsActionsColumn,
];
