import { LogisticsRowActions } from 'modules/provider/logistics/components/LogisticsRowActions';
import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { ILogistics } from 'modules/provider/logistics/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { LOGISTICS_PERMISSIONS } from 'modules/provider/logistics/constants/logistics.permissions';
import { IAddressWithLocation } from 'modules/common/interfaces';
import ProvinceCell from 'modules/provider/logistics/components/ProvinceCell/ProvinceCell';
import MunicipalityCell from 'modules/provider/logistics/components/MunicipalityCell/MunicipalityCell';
import ProvicerLogCell from 'modules/provider/logistics/components/ProviederLogCell/ProvicerLogCell';
import { Typography } from '@mui/material';

export const logisticsNameColumn: HeadCell<ILogistics> = {
  field: 'name',
  headerName: 'logistics:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: ILogistics) => (<ProvicerLogCell ProviderLogisticId={data?._id as string} name={name} avatar={data?.avatar} />),
};
export const logisticsCodeColumn: HeadCell<ILogistics> = {
  field: 'code',
  headerName: 'logistics:fields.code',
};

export const logisticsEmailColumn: HeadCell<ILogistics> = {
  field: 'contacts',
  headerName: 'logistics:fields.email',
  type: CellType.EMAIL,
  renderCell: (contacts: any) => (<Typography>{contacts[0].mainEmail}</Typography>)
};
export const logisticsProvinceColumn: HeadCell<ILogistics> = {
  field: 'address',
  headerName: 'logistics:fields.province',
  renderCell: (addres: IAddressWithLocation) => (<ProvinceCell state={addres?.state} />)
};
export const logisticsMunicipalyColumn: HeadCell<ILogistics> = {
  field: 'address',
  headerName: 'logistics:fields.municipaly',
  renderCell: (addres: IAddressWithLocation) => (<MunicipalityCell privinceCode={addres?.state} municipality={addres?.municipality}/>)
};

export const logisticsCommissionColumn: HeadCell<ILogistics> = {
  field: 'commission',
  align: CellAlign.CENTER,
  headerName: 'logistics:fields.commission',
};
export const logisticshandlingCostColumn: HeadCell<ILogistics> = {
  field: 'handlingCost',
  align: CellAlign.CENTER,
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
  logisticsEmailColumn,
  logisticsProvinceColumn,
  logisticsMunicipalyColumn,
  logisticsCommissionColumn,
  logisticshandlingCostColumn,
  createdATColumn,
  logisticsActionsColumn
];
