import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { DistributionCentersRowActions } from '../components/DistributionCentersRowActions';
import { FormattedAddressCell } from 'components/AddressCell';
import DistributionCenterVisiblePicker from '../components/DistributionCenterVisiblePicker/DistributionCenterVisiblePicker';
import { DISTRIBUTION_CENTER_PERMISSIONS } from './distribution-centers.permissions';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';

export const distributionCentersNameColumn: HeadCell<IDistributionCenters> = {
  field: 'name',
  headerName: 'distributionCenters:fields.name',
  disablePadding: false,
  renderCell: (name: string, data: IDistributionCenters) => (
    <AvatarNameCell
      name={name}
      hideImage
      link={`/inventory/distribution-centers/${data?._id as string}/general`}
      permissions={DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_VIEW}
    />
  ),
};

export const storeLogisticColumn: HeadCell<IDistributionCenters> = {
  field: 'logistic.name',
  headerName: 'distributionCenters:fields.logistic',
  renderCell: (name: string, data: IDistributionCenters) => (
    <AvatarNameCell
      name={name}
      link={`/inventory/settings/logistics/${data?.logistic?._id as string}/general`}
      hideImage
      permissions={LOGISTICS_PERMISSIONS.LOGISTICS_VIEW}
    />
  ),
};

export const storeDescriptionColumn: HeadCell<IDistributionCenters> = {
  field: 'description',
  headerName: 'distributionCenters:fields.description',
};

export const distributionCenterVisibilityColumn: HeadCell<IDistributionCenters> = {
  field: 'visible',
  align: CellAlign.CENTER,
  headerName: 'distributionCenters:fields.visibility',
  component: DistributionCenterVisiblePicker,
};

export const distributionCenterActionsColumn: HeadCell<IDistributionCenters> = {
  field: 'actions',
  sortable: false,
  width: 100,
  headerName: 'common:actions',
  disablePadding: true,
  component: DistributionCentersRowActions,
  permissions: DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_WRITE,
};

export const addressColumn: HeadCell<IDistributionCenters> = {
  field: 'address',
  translate: true,
  headerName: 'common:address',
  renderCell: (name: string, data: IDistributionCenters) => <FormattedAddressCell address={data.address} />, // <AddressCell address={data.address} />,
};

// inventory/distributionCenter/:distributionCenterId/inventory
export const distributionCentersColumns: Array<HeadCell<any>> = [
  distributionCentersNameColumn,
  storeLogisticColumn,
  addressColumn,
  distributionCenterVisibilityColumn,
  createdATColumn,
  distributionCenterActionsColumn,
];

// inventory/settings/logistics/:logisticId/distribution-centers
export const logisticDistributionCentersColumns: Array<HeadCell<any>> = [
  distributionCentersNameColumn,
  addressColumn,
  distributionCenterVisibilityColumn,
  createdATColumn,
  distributionCenterActionsColumn,
];

export const logisticWarehouseColumns: Array<HeadCell<any>> = [
  distributionCentersNameColumn,
  addressColumn,
  distributionCenterVisibilityColumn,
  createdATColumn,
  distributionCenterActionsColumn,
];
