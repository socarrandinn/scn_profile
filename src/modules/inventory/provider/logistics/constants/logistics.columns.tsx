import { LogisticsRowActions } from 'modules/inventory/provider/logistics/components/LogisticsRowActions';
import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants/logistics.permissions';
import { IAddressWithLocation } from 'modules/common/interfaces';
import ProviderLogCell from 'modules/inventory/provider/logistics/components/ProviderLogCell/ProviderLogCell';
import { AddressValue } from 'modules/common/components/Address';
import LogisticStatusTableDataPicker
  from 'modules/inventory/provider/logistics/components/DataPickerLogistic/LogisticStatusTable';
import ComissionCell from 'modules/inventory/provider/logistics/components/ComissionCell/ComissionCell';

export const logisticsNameColumn: HeadCell<ILogistics> = {
  field: 'name',
  headerName: 'logistics:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: ILogistics) => (
        <ProviderLogCell ProviderLogisticId={data?._id as string} name={name} avatar={data?.avatar}/>
  ),
};
export const logisticsCodeColumn: HeadCell<ILogistics> = {
  field: 'code',
  headerName: 'logistics:fields.code',
};

export const logisticsStatusColumn: HeadCell<ILogistics> = {
  field: 'active',
  headerName: 'logistics:fields.active',
  component: LogisticStatusTableDataPicker
};

export const logisticsEmailColumn: HeadCell<ILogistics> = {
  field: 'contacts',
  headerName: 'logistics:fields.email',
  type: CellType.EMAIL,
  renderCell: (contacts: any) => (contacts.mainEmail)
};
export const logisticsAddressColumn: HeadCell<ILogistics> = {
  field: 'address',
  translate: true,
  headerName: 'logistics:fields.address',
  renderCell: (value: IAddressWithLocation) => <AddressValue value={value}/>,
};

export const logisticsCommissionColumn: HeadCell<ILogistics> = {
  field: 'commission',
  align: CellAlign.CENTER,
  headerName: 'logistics:fields.commission',
  renderCell: (commission: number) => (<ComissionCell value={commission}/>),
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
  logisticsNameColumn,
  logisticsCodeColumn,
  logisticsStatusColumn,
  logisticsEmailColumn,
  logisticsAddressColumn,
  logisticsCommissionColumn,
  logisticHandlingCostColumn,
  createdATColumn,
  logisticsActionsColumn
];
