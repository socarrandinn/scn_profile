
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants/warehouse.permissions';
import { StoreVisiblePicker } from 'modules/inventory/warehouse/components/StoreVisiblePicker';
import DistributionCentersCell from 'modules/inventory/distribution-centers/components/DistributionCentersCell/DistributionCentersCell';
import ProviderLogCell from 'modules/inventory/provider/logistics/components/ProviderLogCell/ProviderLogCell';
import { DistributionCentersRowActions } from '../components/DistributionCentersRowActions';
import { AddressCell } from 'components/AddressCell';

export const distributionCentersNameColumn: HeadCell<IDistributionCenters> = {
  field: 'name',
  headerName: 'distributionCenters:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IDistributionCenters) => <DistributionCentersCell name={name} distributionCenterId={data._id as string} />,
};

export const storeLogisticColumn: HeadCell<IDistributionCenters> = {
  field: 'logistic.name',
  headerName: 'distributionCenters:fields.logistic',
  renderCell: (name: string, data: IDistributionCenters) => (
    <ProviderLogCell ProviderLogisticId={data?.logistic?._id as string} name={name} hideImage />
  ),
};

export const storeDescriptionColumn: HeadCell<IDistributionCenters> = {
  field: 'description',
  headerName: 'distributionCenters:fields.description',
};

export const storeVisibilityColumn: HeadCell<IDistributionCenters> = {
  field: 'visible',
  align: CellAlign.CENTER,
  headerName: 'distributionCenters:fields.visibility',
  component: StoreVisiblePicker,
};

export const storeActionsColumn: HeadCell<IDistributionCenters> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: DistributionCentersRowActions,
};

export const addressColumn: HeadCell<IDistributionCenters> = {
  field: 'address',
  translate: true,
  headerName: 'common:address',
  renderCell: (name: string, data: IDistributionCenters) => <AddressCell address={data.address} />,
};

// inventory/distributionCenter/:distributionCenterId/inventory
export const distributionCentersColumns: Array<HeadCell<any>> = [
  distributionCentersNameColumn,
  storeLogisticColumn,
  addressColumn,
  storeVisibilityColumn,
  createdATColumn,
  storeActionsColumn,
];

export const logisticWarehouseColumns: Array<HeadCell<any>> = [
  distributionCentersNameColumn,
  addressColumn,
  storeVisibilityColumn,
  createdATColumn,
  storeActionsColumn,
];
