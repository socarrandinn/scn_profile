import { LogisticsRowActions } from 'modules/inventory/provider/logistics/components/LogisticsRowActions';
import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import { addressColumn, createdATColumn } from 'modules/common/constants/common.columns';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants/logistics.permissions';
import { ProviderAvatarCell } from 'modules/inventory/provider/common/components/ProviderAvatarCell';
import { IProvider } from '../../common/interfaces';
import { ProviderStatePicker } from '../../common/components';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';

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
    <AvatarNameCell
      name={name}
      link={`/inventory/settings/logistics/${data?._id as string}/general`}
      hideImage
      permissions={LOGISTICS_PERMISSIONS.LOGISTICS_VIEW}
    />
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

export const logisticStatusColumn: HeadCell<IProvider> = {
  field: 'visible',
  headerName: 'common:fields.visible.title',
  align: CellAlign.CENTER,
  renderCell: (visible: boolean, data: IProvider) => (
    <ProviderStatePicker
      rowId={data._id as string}
      value={visible}
      record={data}
      permissions={LOGISTICS_PERMISSIONS.LOGISTICS_WRITE}
    />
  ),
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
  addressColumn,
  logisticsEmailColumn,
  logisticStatusColumn,
  createdATColumn,
  logisticsActionsColumn,
];
