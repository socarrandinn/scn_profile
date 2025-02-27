import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';
import { addressColumn, createdATColumn } from 'modules/common/constants/common.columns';
import { DistributionCentersRowActions } from '../components/DistributionCentersRowActions';
import DistributionCenterVisiblePicker from '../components/DistributionCenterVisiblePicker/DistributionCenterVisiblePicker';
import { DISTRIBUTION_CENTER_PERMISSIONS } from './distribution-centers.permissions';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';
import { CurrencyValue } from '@dfl/mui-react-common';

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

export const handlingCostColumn: HeadCell<IDistributionCenters> = {
  field: 'handlingCost',
  align: CellAlign.CENTER,
  type: CellType.CURRENCY,
  headerName: 'logistics:fields.handlingCost',
  renderCell: (value: number) => <CurrencyValue value={Number(value || 0).toFixed(2)} />,
};

// inventory/distributionCenter/:distributionCenterId/inventory
export const distributionCentersColumns: Array<HeadCell<any>> = [
  distributionCentersNameColumn,
  storeLogisticColumn,
  addressColumn,
  handlingCostColumn,
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
