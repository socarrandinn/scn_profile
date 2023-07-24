import { ProductsRowActions } from 'modules/provider/products/components/ProductsRowActions';
import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { IProducts } from 'modules/provider/products/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { PRODUCTS_PERMISSIONS } from 'modules/provider/products/constants/products.permissions';
import { ILogistics } from 'modules/provider/logistics/interfaces';
import { IAddressWithLocation } from 'modules/common/interfaces';
import { AddressValue } from 'modules/common/components/Address';
import CommissionCelll from 'modules/provider/logistics/components/CommisionCell/CommissionCelll';
import ProviderProdCell from 'modules/provider/products/components/ProviderProdCell/ProviderProdCell';
import ProductStatusTable from 'modules/provider/products/components/DataPickerPoroduct/ProductsStatusTable';

export const productsNameColumn: HeadCell<IProducts> = {
  field: 'name',
  headerName: 'products:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IProducts) => (
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
  renderCell: (contacts: any) => (contacts.mainEmail)
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
  renderCell: (commission: number) => (<CommissionCelll value={commission} />)
};

export const productsActionsColumn: HeadCell<IProducts> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: PRODUCTS_PERMISSIONS.PRODUCTS_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: ProductsRowActions
};

export const productsColumns: Array<HeadCell<any>> = [
  productsNameColumn,
  logisticsCodeColumn,
  logisticsStatusColumn,
  logisticsEmailColumn,
  logisticsAdressColumn,
  logisticsCommissionColumn,
  createdATColumn,
  productsActionsColumn
];
