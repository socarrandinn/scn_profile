import { ProductsRowActions } from 'modules/inventory/provider/supplier/components/SupplierRowActions';
import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants/supplier.permissions';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import { IAddressWithLocation } from 'modules/common/interfaces';
import { AddressValue } from 'modules/common/components/Address';
import ComissionCell from 'modules/inventory/provider/logistics/components/ComissionCell/ComissionCell';
import ProviderProdCell from 'modules/inventory/provider/supplier/components/SupplierCell/SupplierCell';
import ProductStatusTable from 'modules/inventory/provider/supplier/components/DataPickerPoroduct/ProductsStatusTable';

export const productsNameColumn: HeadCell<ISupplier> = {
  field: 'name',
  headerName: 'products:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: ISupplier) => (
    <ProviderProdCell ProdProductId={data._id as string} name={name} avatar={data.avatar}/>)
};

export const logisticsCodeColumn: HeadCell<ILogistics> = {
  field: 'code',
  headerName: 'logistics:fields.code',
};
export const logisticsStatusColumn: HeadCell<ILogistics> = {
  field: 'active',
  headerName: 'logistics:fields.active',
  component: ProductStatusTable
};

export const logisticsEmailColumn: HeadCell<ILogistics> = {
  field: 'contacts',
  headerName: 'logistics:fields.email',
  type: CellType.EMAIL,
  renderCell: (contacts: any) => (contacts?.mainEmail)
};
export const logisticsAdressColumn: HeadCell<ILogistics> = {
  field: 'address',
  translate: true,
  headerName: 'logistics:fields.address',
  renderCell: (value: IAddressWithLocation) => <AddressValue value={value} />
};

export const logisticsCommissionColumn: HeadCell<ILogistics> = {
  field: 'commission',
  align: CellAlign.CENTER,
  headerName: 'logistics:fields.commission',
  renderCell: (commission: number) => (<ComissionCell value={commission} />)
};

export const productsActionsColumn: HeadCell<ISupplier> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: SUPPLIER_PERMISSIONS.SUPPLIER_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: ProductsRowActions
};

export const supplierColumns: Array<HeadCell<any>> = [
  productsNameColumn,
  logisticsCodeColumn,
  logisticsStatusColumn,
  logisticsEmailColumn,
  logisticsAdressColumn,
  logisticsCommissionColumn,
  createdATColumn,
  productsActionsColumn
];
